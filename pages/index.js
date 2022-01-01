import NextLink from 'next/link'
import { Container, Box, Button, Heading, Image, Link, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            >
                Hello, I'm an iOS developer based in Germany!
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Tim Langner
                    </Heading>
                    <p>Developer / Designer</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                <Image
                    borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    maxWidth="100px"
                    display="inline-block"
                    borderRadius="full"
                    src="/images/profilePicture.jpg"
                    alt="Profile image"
                />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <p>
                    Tim is an iOS developer who currently works
                    on multiple iOS Apps within a team of six engineers.
                    We're constantly implementing new features such as
                    Augmented Reality experiences and Covid-19
                    test- & vaccine appointments.
                </p>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                <BioYear>1999</BioYear>
                    Born in Nordhorn, Lower Saxony, Germany.
                </BioSection>
                <BioSection>
                <BioYear>2019</BioYear>
                    Became a state-certified information technology assistant after graduating at the Industrial Vocational School GBS Nordhorn
                </BioSection>
                <BioSection>
                <BioYear>2019 - 2022</BioYear>
                    Training as an IT specialist for application development, Tobit Software Laboritories AG
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ♥
                </Heading>
                <p>
                    Space, Music, Photography, Games
                </p>
            </Section>
        </Container>
    )
}

export default Page