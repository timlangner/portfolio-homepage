import {
  Container,
  Flex,
  Image,
  Link,
  List,
  ListItem,
  Show
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import AstroneImages from '../../components/layouts/astroneImages'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Astrone">
    <Container>
      <Title>Astrone</Title>
      <p>
        Astrone is your personal guide for all kinds of exciting astronomy
        events. Whether you just quickly want to explore any upcoming events or
        want to know when the next solar eclipse is happining, you&apos;re in
        the right place. Simply check out our Discover page and find yourself
        something you like.
      </p>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>App</Meta>
          <Link
            href="https://apps.apple.com/app/astrone/id1668817127"
            isExternal
          >
            https://apps.apple.com/app/astrone/id1668817127
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Role in development</Meta>
          <span>Main developer & UI/UX Designer</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native</span>
        </ListItem>
      </List>

      <Show below="md">
        <AstroneImages />
      </Show>
      <Show above="md">
        <Flex align="center" gap={3}>
          <Image
            borderRadius="lg"
            w="50%"
            src="/images/projects/DiscoverPage.png"
            alt="Discover Page"
            mb={4}
          />
          <Image
            borderRadius="lg"
            w="50%"
            src="/images/projects/EventDetails.png"
            alt="Event Details"
            mb={4}
          />
        </Flex>
        <Flex align="center" gap={3}>
          <Image
            borderRadius="lg"
            w="50%"
            src="/images/projects/News.png"
            alt="News"
            mb={4}
          />
          <Image
            borderRadius="lg"
            w="50%"
            src="/images/projects/Reminders.png"
            alt="Reminders"
            mb={4}
          />
        </Flex>
      </Show>
    </Container>
  </Layout>
)

export default Project
