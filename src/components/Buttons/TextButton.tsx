import { Button } from "@chakra-ui/react";


type TextButtonProps = {
    text: string;
    onClick: () => void;
};

const TextButton = ({ text }:TextButtonProps) => {
    return (
        <Button type="submit" width="full" bg="#E9893B" mt={10} borderRadius={20} color={"white"}>
            {text}
        </Button>
    );
};

export default TextButton;