import { Container, Image, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/project'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Umbrella Sharing">
    <Container>
      <Title>
        Umbrella Sharing
      </Title>
      <p>
        Have you ever been in a situation where it suddently starts to rain but you need to go somewhere and you don't have an umbrella? 
        This system allows everyone to buy an umbrella at different locations across the city in Ahaus. Since you buy the umbrella you could keep it
        if you want to. But the network of multiple "umbrella-stations" around the city allows you to sell the umbrella back if you don't need
        it anymore. If you sell it back within two hours you even get back the full price for it.
      </p>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Role in development</Meta>
          <span>Main developer</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js, .NET Core, Microsoft SQL Server</span>
        </ListItem>
      </List>

      <Image borderRadius="lg" w="75%" src="/images/projects/umbrella-sharing_map.png" alt="Umbrella Sharing Map" mb={4} />
      <Image borderRadius="lg" w="75%" src="/images/projects/umbrella-sharing_administration01.png" alt="Umbrella Sharing Administration Overview" mb={4} />
      <Image borderRadius="lg" w="75%" src="/images/projects/umbrella-sharing_administration02.png" alt="Umbrella Sharing Administration Activity History" mb={4} />
    </Container>
  </Layout>
)

export default Project