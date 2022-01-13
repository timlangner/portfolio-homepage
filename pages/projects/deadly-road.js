import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Deadly Road">
    <Container>
      <Title>
        Deadly Road
      </Title>
      <p>
        Addictive & challenging Jump n&apos; Run Platformer mobile game
      </p>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Game</Meta>
          <Link href="https://play.google.com/store/apps/details?id=com.TL.DeadlyRoad">
            https://play.google.com/store/apps/details?id=com.TL.DeadlyRoad <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Unity, SQLite</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Project