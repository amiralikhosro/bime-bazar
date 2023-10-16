import { useFormContext } from "react-hook-form";

export default function FromInput({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) {
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext();

  const { ref, ...rest } = register(name);

  return (
    <div>
      <input
        autoComplete="false"
        placeholder={placeholder}
        {...rest}
        ref={(e) => {
          ref(e);
        }}
        defaultValue={getValues(name)}
        className={`border ${
          errors?.[name]?.message ? "border-error" : "border-gray"
        } rounded w-full p-[14px]`}
      />

      <p className="text-error text-xs py-1 h-[22px]">
        {errors?.[name]?.message?.toString()}
      </p>
    </div>
  );
}
