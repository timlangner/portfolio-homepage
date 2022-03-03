import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="chayns-header">
    <Container>
      <Title>
      chayns® Header
      </Title>
      <p>
        Smooth header transition layout for mobile and desktop chayns® sites.
      </p>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Layout</Meta>
          <Link href="https://github.com/timlangner/chayns-header" isExternal>
          https://github.com/timlangner/chayns-header <ExternalLinkIcon mx="2px" />
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