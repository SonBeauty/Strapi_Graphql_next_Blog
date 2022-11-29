import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

export default function Home ({data}){
  

 return <div>{data.data?.map(posts=> {
  return (
  <>
    <h1>
      {posts.attributes.title}
    </h1>
    <p>{posts.attributes.desciption}</p>
  </>
  
   )
}
)}</div>
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri:'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })

  const {data} = await client.query({
    query: gql`
    query posts {
      posts {
        data {
          attributes {
            title,
            desciption
          }
        }
      }
    }`
  })

  return{
    props:{
      data:data.posts
    }
  }
}