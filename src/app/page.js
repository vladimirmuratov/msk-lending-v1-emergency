import { Banner } from '@/components/Banner';
import { text1 } from '@/config';
import { TextBlock } from '@/components/TextBlock';
import { ContactsBlock } from '@/components/ContactsBlock';
import { FormAction } from '@/components/FormAction';
import { MainInfoBlock } from '@/components/MainInfoBlock';
import { CoordinatorBlock } from '@/components/CoordinatorBlock';
import PhoneBlock from '@/components/PhoneBlock';

export default function Home() {
    return (
        <main style={{ position: 'relative' }}>
            <Banner />
            {/*<CardsBlock />*/}
            {/*<PhoneBlock text="Получить экстренную помощь немедленно!" />*/}
            <MainInfoBlock />
            {/*<PhoneBlock text="Узнать условия госпитализации" />*/}
            {/*<AboutBlock />*/}
            {/*<WhyWeBlock />*/}
            {/*<PhoneBlock text="Связаться с дежурным врачом" />*/}
            {/*<WeRespondBlock />*/}
            {/*<WhatWeOfferBlock/>*/}
            {/*<DirectionsOfHospitalizationBlock />*/}
            {/*<PhoneBlock text="Позвоните прямо сейчас — организуем госпитализацию в течение нескольких часов!" />*/}
            {/*<BaseAccordion id="faq" title="Частые вопросы" items={faq} />*/}
            <CoordinatorBlock />
            {/*<PartnersBlock />*/}
            <PhoneBlock text="Позвоните прямо сейчас — организуем госпитализацию в течение нескольких часов!" />
            {/*<BaseAccordion id="service" title="Услуги" items={services} />*/}
            <TextBlock text={text1} />
            <ContactsBlock />
            <FormAction />
        </main>
    );
}
