interface Props {
    value?: any | undefined;
    name: string | undefined;
    type?: string | undefined;
    label?: string | undefined;
    placeholder?: string | undefined;
};

const Field = ({ ...props }: Props) => (
    <>
        {props.label ?? <p class="font-light">{props.label}</p>}
        <input class="mt-2 px-4 py-3 rounded-lg w-full" {...props} />
    </>
);

export default Field;
