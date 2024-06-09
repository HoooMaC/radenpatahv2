import {cn} from "@/utils/cn";

export const BentoGrid = ({
                            className,
                            children,
                          }: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
      <div
          className={cn(
              "grid grid-cols-6 gap-4 w-full",
              className
          )}
      >
        {children}
      </div>
  );
};

export const BentoGridItem = (
    {
      className,
      title,
      description,
      header,
      icon,
    }: {
      className?: string;
      title?: string | React.ReactNode;
      description?: string | React.ReactNode;
      header?: React.ReactNode;
      icon?: React.ReactNode;
    }) => {
  return (
      <div
          className={cn(
              "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input" +
              " shadow-none  hover:border-0 bg-white justify-between flex flex-col border border-black-1/2" +
              " space-y-4",
              className
          )}
      >
        {header}
        <div className="flex flex-col justify-between group-hover/bento:translate-x-2 transition duration-200">
          <div className="basis-1/2 flex-grow relative min-h-10 max-h-40 w-full overflow-hidden">
            {icon}
          </div>
          <div className="font-sans font-bold text-neutral-600 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs">
            {description}
          </div>
        </div>
      </div>
  );
};
