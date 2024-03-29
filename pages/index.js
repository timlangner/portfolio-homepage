import NextLink from 'next/link'
import {
  Container,
  Box,
  Button,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Hello, I&apos;m a full stack developer based in Germany!
        </Box>

        <Box display={{ md: 'flex' }}>
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
              borderRadius="full"
              boxSize="100px"
              objectFit="cover"
              display="inline-block"
              src="/images/portrait.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <p>
            I&apos;m a full-stack developer specializing in native app and
            front-end development. Recently, I&apos;ve been working on several
            iOS apps with a team of six engineers. We were constantly
            implementing new features such as Augmented Reality experiences,
            crypto algorithms and Covid-19 test- & vaccine appointments. Besides
            that, I&apos;ve developed, designed and maintained multiple web
            applications which include front- and backend using React, Redux
            Toolkit, .NET and C#, MS SQL Server and more.
          </p>
          <Box align="center" my={4}>
            <NextLink href="/projects">
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
            Became a state-certified information technology assistant after
            graduating at the Industrial Vocational School GBS Nordhorn
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Internship as an application developer
          </BioSection>
          <BioSection>
            <BioYear>2019 - 2022</BioYear>
            Software Engineer, Tobit Software Laboratories AG
          </BioSection>
          <BioSection>
            <BioYear>2022 - Current</BioYear>
            Software Engineer, Flavia IT Management GmbH
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <p>Space, Music, Photography, Content Creation, Esports</p>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/timlangner/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @timlangner
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/timlangner" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @timlangner
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/tim.0811" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @tim.0811
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Contact
          </Heading>
          <a href="mailto:tim.langner0@gmail.com">tim.langner0@gmail.com</a>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
