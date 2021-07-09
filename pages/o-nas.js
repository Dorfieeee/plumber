import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import { Heading, VStack, Text, Center, Button } from "@chakra-ui/react";
import PlumbersSVG from "../components/svg/plumbers";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import links from "../public/content/links";
import MainHeading from "../components/headings/MainHeading";

const Paragraph = ({ children }) => <Text maxW="450px">{children}</Text>;

function About({ children, ...rest }) {
    return (
        <PageLayout title="O nás" {...rest}>
            <Header px={"5%"} mb={10}>
                <MainHeading>O našem podnikání</MainHeading>
                <Heading
                    as="h2"
                    fontSize="lg"
                    fontStyle="italic"
                    textAlign="center"
                    mb={3}
                    ml={14}
                >
                    - na které se můžete spolehnout
                </Heading>
                <Center m="3rem auto" maxW="768px">
                    <PlumbersSVG w="100%" h="100%" />
                </Center>
            </Header>
            <VStack as="main" px={"5%"} mb={10} spacing={10} textAlign="center">
                <Heading as="h3">od roku 1992...</Heading>
                <Paragraph>
                    Naše firma působí na trhu od roku 1992 a specializuje se na
                    montáže vody, kanalizace, plynu, topení, podlahového topení,
                    montáže a rekonstrukce kotelen, montáže a dodání tepelných
                    čerpadel a solárních systémů.
                </Paragraph>
                <Heading as="h3">stovky uskutečněných projektů...</Heading>

                <Paragraph>
                    Nabízíme kompletní poradenské, dodavatelské, projektové,
                    revizní a montážní služby na klíč. Zakládáme si na seriozním
                    jednání, výběru kvalitních materiálů a regulačních prvků s
                    ohledem na jejich pozdější bezporuchový a hospodárný provoz.
                    Naším krédem je odborná a bezchybná montáž s odpovídajícím
                    technickým vybavením.
                </Paragraph>

                <Heading as="h3">nespočet spokojených zákazníků...</Heading>

                <Paragraph>
                    Naše firma vám poskytne mnoholetou zkušenost a profesionální
                    přístup.
                </Paragraph>
                <NextLink href={links.navbar.kontakty.href} passHref>
                    <Button
                        as="a"
                        variant="primary"
                        rightIcon={<ArrowForwardIcon />}
                    >
                        Kontaktujte nás
                    </Button>
                </NextLink>
            </VStack>
        </PageLayout>
    );
}

export default About;
