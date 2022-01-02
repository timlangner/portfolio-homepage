import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="React-Toastification">
    <Container>
      <Title>
        React Toastification
      </Title>
      <p>
        NPM package to get easy and customizable toast-notifications for React.
      </p>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Package</Meta>
          <Link href="https://github.com/timlangner/react-toastification">
          https://github.com/timlangner/react-toastification <ExternalLinkIcon mx="2px" />
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