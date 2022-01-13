import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="chayns® Personenzähler">
    <Container>
      <Title>
        chayns® Personenzähler
      </Title>
      <p>
        With the people counter visitor frequency can not only be measured automatically, but access restrictions can also be easily controlled electronically
      </p>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://momentchennoch.de/">
          https://momentchennoch.de/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Role in development</Meta>
          <span>Main frontend developer & helped with backend development</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android, Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js, .NET Core, Microsoft SQL Server</span>
        </ListItem>
      </List>

      {/* <WorkImage src="/images/projects/chayns-personenzaehler_01.png" alt="Web Interface" /> */}
    </Container>
  </Layout>
)

export default Project