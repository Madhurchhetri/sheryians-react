import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getAllEmployees,
  deleteEmployee,
  updateEmployee,
  getEmployeeById,
} from "../api/employeeApi";

import { useState } from "react";

export let useEmployee = (employeeId) => {
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState({
    search: "",
    role: "",
    department: "",
    status: "",
  });

  console.log("filters->", filters);

  const queryClient = useQueryClient();

  // =========================
  // GET ALL EMPLOYEES
  // =========================

  let { data, isPending, isFetching } = useQuery({
    queryKey: ["employees", page, filters],

    queryFn: () =>
      getAllEmployees({
        page,
        limit: 5,
        role: filters.role,
        status: filters.status,
        department: filters.department,
        search: filters.search,
      }),

    staleTime: 100000,
    placeholderData: (prev) => prev,
  });

  // =========================
  // GET SINGLE EMPLOYEE
  // =========================

  const employeeQuery = useQuery({
    queryKey: ["employee", employeeId],

    queryFn: () => getEmployeeById(employeeId),

    enabled: !!employeeId,
  });

  // =========================
  // DELETE EMPLOYEE
  // =========================

  const deleteMutation = useMutation({
    mutationFn: deleteEmployee,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["employees"],
      });
    },

    onError: (error) => {
      console.log("Delete employee error:", error);
    },
  });

  const handleDeleteEmployee = (empId) => {
    deleteMutation.mutate(empId);
  };

  // =========================
  // UPDATE EMPLOYEE
  // =========================

  const updateMutation = useMutation({
    mutationFn: ({ empId, data }) =>
      updateEmployee(empId, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["employees"],
      });
    },

    onError: (error) => {
      console.log("Update employee error:", error);
    },
  });

  const handleUpdateEmployee = (empId, data) => {
  return updateMutation.mutateAsync({
    empId,
    data,
  });
};

  // =========================
  // PAGINATION
  // =========================

  const handlePageChange = (newPage) => {
    if (newPage < 1) return;

    if (newPage > data?.pagination?.totalPages) return;

    setPage(newPage);
  };

  // =========================
  // SEARCH / FILTER
  // =========================

  let handleSearchFilters = (name, value) => {
    setPage(1);

    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return {
    // list
    isPending,
    data,
    isFetching,

    // pagination
    handlePageChange,

    // filters
    filters,
    handleSearchFilters,

    // delete
    handleDeleteEmployee,
    isDeleting: deleteMutation.isPending,

    // update
    handleUpdateEmployee,
    isUpdating: updateMutation.isPending,

    // single employee
    employee: employeeQuery.data,
    isEmployeeLoading: employeeQuery.isPending,
  };
};