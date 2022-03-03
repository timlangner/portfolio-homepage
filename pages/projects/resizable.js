import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Resizable">
    <Container>
      <Title>
        Resizable
      </Title>
      <p>
        Resizeable chayns® pagemaker element for space between elements. Spaces are adjusted and can be customized for both mobile and desktop.
      </p>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Component</Meta>
          <Link href="https://github.com/timlangner/resizeable" isExternal>
            https://github.com/timlangner/resizeable <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js, Sass</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Project