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
          <ProjectGridItem id="astrone" title="Astrone">
            Personal guide for all kinds of exciting astronomy
            events.
          </ProjectGridItem>
        </Section>

        <Section>
          <ProjectGridItem id="react-toastification" title="react-toastification">
            Easy and customizable toast-notifications with React
          </ProjectGridItem>
        </Section>

        <Section delay={0.1}>
          <ProjectGridItem id="umbrella-sharing" title="Umbrella Sharing">
            Frontend & Backend for an umbrella sharing system across the city
          </ProjectGridItem>
        </Section>

        <Section delay={0.1}>
          <ProjectGridItem
            id="deadly-road"
            title="Deadly Road"
          >
            Addictive & challenging Jump n&apos; Run Platformer mobile game
          </ProjectGridItem>
        </Section>
        <Section delay={0.1}>
          <ProjectGridItem id="blobwar-api" title="BlobWar Express API">
            Express API for the retired Agar.io like game BlobWar.io
          </ProjectGridItem>
        </Section>

        <Section>
          <ProjectGridItem id="chayns-personenzaehler" title="chayns Personenzähler">
            Web interface for a digital person counter app
          </ProjectGridItem>
        </Section>

        <Section delay={0.1}>
          <ProjectGridItem id="bublex-client" title="Bublex client">
            Game client for the retired Agar.io like game bublex.io
          </ProjectGridItem>
        </Section>

        <Section delay={0.1}>
          <ProjectGridItem id="timeline" title="Timeline">
            Animated timeline for job and education history
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
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects