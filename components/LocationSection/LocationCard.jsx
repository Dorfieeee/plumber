import Image from "next/image";
import { LinkBox, Center, useTheme, useColorMode, LinkOverlay } from "@chakra-ui/react";
import NextLink from "next/link"
import { hexToRGBA } from "../../theme/utils";
import PropTypes from "prop-types"

const LocationCard = ({ children, src, alt, ...props }) => {
    const theme = useTheme();
    const {colorMode} = useColorMode();

    return (
        <LinkBox
            position="relative"
            w="100%"
            minW={{ base: "250px" }}
            minH={{ base: "100px", md: "150px" }}
            flexGrow="1"
            clipPath="circle(65% at center center)"
            maxW={{ base: "100%", md: "75%", lg: "66%", xl: "33%" }}
            sx={{
                "& img": {
                    transition: "transform 3s ease",
                },
                "&:hover img": {
                    transform: "scale(1.2)",
                },
                "& .content": {
                    transition:
                        "background 1.5s ease, color .75s ease, text-shadow .75s ease",
                    bg: hexToRGBA(colorMode === "light" ? theme.colors.primary : theme.colors.secondary, 0.7),
                    textShadow: "5px 0px 25px" + "primary",
                },
                "&:hover .content": {
                    bg: "transparent",
                    color: "primary",
                    textShadow: "5px 0px 5px" + theme.colors.secondary,
                },
            }}
            {...props}
        >
            <Image
                src={src}
                layout="fill"
                alt={alt}
                objectFit="cover"
                objectPosition="center"
            />
            <Center
                className="content"
                position="absolute"
                w="100%"
                h="100%"
                fontSize="2rem"
                fontWeight="bold"
            >
                <NextLink href={`\mista\#${children.toLowerCase()}`} passHref>
                    <LinkOverlay as="a">
                        {children}
                    </LinkOverlay>
                </NextLink>
            </Center>
        </LinkBox>
    );
};

LocationCard.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default LocationCard;
