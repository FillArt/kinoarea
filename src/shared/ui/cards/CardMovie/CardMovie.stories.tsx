
import {CardMovie, CardMovieProps} from './CardMovie.tsx';

export default {
    title: 'Common/Cards/CardMovie',
    component: CardMovie,
};

const Template = (args: CardMovieProps) => <CardMovie {...args} />;

export const Default = Template.bind({});
export const EmptyPoster = Template.bind({});


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
Default.args = {
    movie: {
        title: 'The Example Movie',
        vote_average: 7.8,
        poster_path: 'https://image.tmdb.org/t/p/w500/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg',
        genres: ['Action', 'Adventure', 'Comedy'],
    },
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
EmptyPoster.args = {
    movie: {
        title: 'The Example Movie',
        vote_average: 7.8,
        genres: ['Action', 'Adventure', 'Comedy'],
    },
};;
