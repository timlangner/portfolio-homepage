import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width , initial-scale=1" />
                <meta name="description" content="Tim is an iOS developer who currently works on multiple iOS Apps within a team of six engineers." />
                <meta name="author" content="Tim Langner" />
                <meta property="og:site_name" content="Tim is an iOS developer who currently works on multiple iOS Apps within a team of six engineers." />
                <meta property="og:type" content="website" />
                <title>Tim Langner - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <LazyVoxelDog />
                {children}
            </Container>
        </Box>
    )
}

export default Main