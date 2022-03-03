import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Color Ratio Calculator">
    <Container>
      <Title>
        Color Ratio Calculator
      </Title>
      <p>
        A color contrast tester and calculator for chayns®
      </p>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Tool</Meta>
          <Link href="https://github.com/timlangner/color-ratio-calculator" isExternal>
          https://github.com/timlangner/color-ratio-calculator <ExternalLinkIcon mx="2px" />
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