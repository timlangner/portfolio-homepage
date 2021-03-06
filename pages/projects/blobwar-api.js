import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="BlobWar API">
    <Container>
      <Title>
        BlobWar Express API
      </Title>
      <p>
      Express API for the retired Agar.io like game BlobWar.io
      </p>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Backend</Meta>
          <Link href="https://github.com/timlangner/blobwar-api" isExternal>
          https://github.com/timlangner/blobwar-api <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Node.js, Express, MySQL, Sequelize, WS</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Project