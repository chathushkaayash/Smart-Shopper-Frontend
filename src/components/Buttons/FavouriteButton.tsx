import React from 'react';
import { Button, Icon, Tooltip } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';

interface FavouriteButtonProps {
    onClick: () => void;
    isFavourite: boolean;
}

const FavouriteButton: React.FC<FavouriteButtonProps> = ({ onClick, isFavourite }) => {
    return (
        <Tooltip
            label={isFavourite ? "Remove from wishlist" : "Add to wishlist"}
            aria-label="Add to favourites tooltip"
            hasArrow
        >
            <Button
                onClick={onClick}
                aria-label="Add to favourites"
                variant="outline"
                borderColor="gray.200"
                bg="white"
                color="gray.900"
                _hover={{ bg: "gray.100", color: "blue.500" }}
                
            >
                <Icon as={FiHeart} w={5} h={5} color={isFavourite ? "red.500" : "gray.900"} />
            </Button>
        </Tooltip>
    );
};

export default FavouriteButton;
