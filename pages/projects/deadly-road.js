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
          <Meta>Android</Meta>
          <Link href="https://play.google.com/store/apps/details?id=com.TL.DeadlyRoad" isExternal>
            play.google.com/store/apps/details?id=com.TL.DeadlyRoad <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>iOS</Meta>
          <Link href="https://apps.apple.com/app/deadly-road/id1672610713?l=en" isExternal>
            apps.apple.com/app/deadly-road/id1672610713?l=en <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Adobe Xd, Unity, SQLite</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Project