import React, { useState, useEffect } from 'react';
import { ArticleWrapper, NewsSectionHeader, Wrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

export const query = `
        {
          allArticles {
            id
            title
            category
            content
            image {
              url
            }
          }
        }`;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    // console.log(process.env.REACT_APP_DATOCMS_TOKEN);
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => setArticles(data.allArticles))
      .catch(() => setError("Sorry, we couldn't load articles for you"));
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed </NewsSectionHeader>
      {articles.length ? (
        articles.map(({ id, title, category, content, image = null }) => {
          return (
            <ArticleWrapper key={id}>
              <TitleWrapper>
                <h3>{title}</h3>
                <p>{category}</p>
              </TitleWrapper>
              <ContentWrapper>
                <p>{content}</p>
                {image ? <img src={image.url} alt="article" /> : null}
              </ContentWrapper>
              <Button isBig>Read more</Button>
            </ArticleWrapper>
          );
        })
      ) : (
        <NewsSectionHeader>{!error ? 'Loading...' : error}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;
