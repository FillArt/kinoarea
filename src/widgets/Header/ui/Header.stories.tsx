import {Header, HeaderProps} from "./Header";
import {Meta, StoryFn} from "@storybook/react";

import FacebookIcon from '../ui/Logo/SocialButtons/assets/fb.svg';
import InstagramIcon from '../ui/Logo/SocialButtons/assets/instagram.svg';
import LinkedinIcon from '../ui/Logo/SocialButtons/assets/linkedin.svg';
import TwitterIcon from '../ui/Logo/SocialButtons/assets/twitter.svg';
import {action} from "@storybook/addon-actions";

export default {
    title: "Widgets/Header",
    component: Header,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            disable: true,
        }
    },
    argTypes: {
        authFunc: { description: "Функция аутентификации" },
        searchFunc: { description: "Функция поиска" },
        navigation: {
            control: { type: "object" },
            description: "Массив объектов с ссылками для навигации.",
        },
        socialLinks: {
            control: { type: "object" },
            description: "Массив объектов с социальными сетями.",
        },
    },
} as Meta;

const Template: StoryFn<HeaderProps> = (args) => {
    return <Header {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    authFunc: action("onLogin"),
    searchFunc: action("onSearch"),
    navigation: [
        { title: 'Афиша', link: '/poster' },
        { title: 'Медиа', link: '/media' },
        { title: 'Фильмы', link: '/movies' },
        { title: 'Актёры', link: '/actors' },
        { title: 'Новости', link: '/news' },
        { title: 'Подборки', link: '/collections' },
        { title: 'Категории', link: '/categories' },
    ],
    socialLinks: [
        { key: 'facebook', link: '/', icon: FacebookIcon },
        { key: 'instagram', link: '/', icon: InstagramIcon },
        { key: 'linkedin', link: '/', icon: LinkedinIcon },
        { key: 'twitter', link: '/', icon: TwitterIcon },
    ],
};
