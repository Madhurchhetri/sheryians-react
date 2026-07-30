import { UserPlus , Pencil } from "lucide-react";

const FormActions = ({isEditMode}) => {
  return (
    <div className="flex items-center justify-end gap-5 mt-10">

      <button
        type="button"
        className="px-8 h-16 rounded-2xl border border-[var(--border-color)]"
      >
        Cancel
      </button>

      <button
        type="submit"
        className="px-8 h-16 rounded-2xl bg-[var(--primary)] text-white flex items-center gap-3"
      >
        {isEditMode ? (
          <Pencil size={20} />
        ) : (
          <UserPlus size={20} />
        )}

        {isEditMode ? "Update Employee" : "Create Employee"}
      </button>

    </div>
  );
};

export default FormActions;