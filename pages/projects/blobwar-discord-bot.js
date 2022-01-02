import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/project'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="BlobWar Discord Bot">
    <Container>
      <Title>
        BlobWar Discord Bot
      </Title>
      <p>
        Discord Bot for BlobWar.io to display info such as the player count for each server, the current leaderboard and their own profile. It also allows players to create, manage and maintain their own clans in the Discord.
      </p>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Discord Bot</Meta>
          <Link href="https://github.com/timlangner/blobwar-discord-bot">
          https://github.com/timlangner/blobwar-discord-bot
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Discord</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Discord.js, SQLite3, Sequelize</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Project