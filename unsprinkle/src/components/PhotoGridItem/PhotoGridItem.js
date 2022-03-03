import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          {
            ['avif', 'jpg'].map(imgType => {
              return (
                <source
                  key={`${id}-src-${imgType}`}
                  type={`image/${imgType}`}
                  srcSet={['', '@2x', '@3x'].map(imgSize => src.replace('.jpg', `${imgSize}.${imgType}`)).join(", ")}
                />
              )
            })
          }
          <source
            type="image/avif"
            srcSet=""
          />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  padding: 4px 0px;
`;

const Tag = styled.li`
  margin-right: 8px;
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
