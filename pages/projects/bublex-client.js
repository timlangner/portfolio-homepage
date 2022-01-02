import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Bublex client">
    <Container>
      <Title>
        Bublex client
      </Title>
      <p>
        Game client for the retired agar.io like game bublex.io
      </p>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Tool</Meta>
          <Link href="https://github.com/timlangner/bublex-client">
            https://github.com/timlangner/bublex-client <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js, Sass, PixiJS, React Bootstrap</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Project