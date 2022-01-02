import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectGridItem id="react-toastification" title="react-toastification">
            Easy and customizable toast-notifications with React
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem
            id="blobwar-discord-bot"
            title="BlobWar Discord Bot"
          >
            Stats and Clan Management Discord Bot for BlobWar.io
          </ProjectGridItem>
        </Section>

        <Section delay={0.1}>
          <ProjectGridItem
            id="resizable"
            title="Resizeable"
          >
            Resizeable chayns® pagemaker element for space between elements
          </ProjectGridItem>
        </Section>
        <Section delay={0.1}>
          <ProjectGridItem id="blobwar-api" title="BlobWar Express API">
            Express API for the retired Agario like game BlobWar.io
          </ProjectGridItem>
        </Section>

        <Section delay={0.1}>
          <ProjectGridItem id="chayns-header" title="chayns® Header">
            Smooth header transition layout for mobile and desktop chayns® sites
          </ProjectGridItem>
        </Section>

        <Section delay={0.1}>
          <ProjectGridItem id="color-ratio-calculator" title="Color Ratio Calculator">
            A color contrast tester and calculator for chayns®
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects