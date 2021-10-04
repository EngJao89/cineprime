import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import { 
  Container, 
  Banner, 
  Title, 
  RateContainer,
  Rate
} from './styles';

function SearchItem({ data, navigatePage }){
  function detailMovie(){
    if(data.release_date === ''){
      alert('Filme ainda sem data');
      return;
    }
    navigatePage(data);
  }

  return (
    <Container activeOpacity={0.7} onPress={ detailMovie }>
      { data?.poster_path ? (
        <Banner 
          resizeMethod="resize"
          source = {{ uri: `https://image.tmdb.org/t/p/original/${data?.poster_path}` }}
        />
      ) : (
        <Banner 
          resizeMethod="resize"
          source={ require('../../assets/image 1.png') } 
        />
      )} 

      <Title>{ data?.title }</Title>

      <RateContainer>
        <Ionicons name="md-star" size={12} color="#E7A74e"/>
        <Rate>{data?.vote_average}/10</Rate>
      </RateContainer>
    </Container>
  )
}

export default SearchItem;