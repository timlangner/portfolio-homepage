import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Timeline">
    <Container>
      <Title>
        Timeline
      </Title>
      <p>
        Animated timeline for job and education history
      </p>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Tool</Meta>
          <Link href="https://github.com/timlangner/timeline" isExternal>
          https://github.com/timlangner/timeline <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Project