import { Box, Typography } from '@mui/material';

export const WhyWeBlock = () => {
    return (
        <Box
            component="section"
            id="whyWe"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >

            <Typography variant="h2"
                        sx={{ marginBottom: '20px', fontSize: { xs: '22px', sm: '34px' }, fontWeight: 500 }}>
                Почему именно мы?
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                <Box component="span" sx={{ fontWeight: 600 }}>МСК-Групп</Box> предоставляет эксклюзивную помощь при
                госпитализации (как срочной, так и плановой), где наша команда провела всесторонний анализ систем работы
                лучших клиник:
            </Typography>
            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                - Обладаем самыми актуальными расценками за отдельные палаты в медицинских учреждениях.
                <br />
                - Обеспечиваем индивидуальный подбор стационара с учетом всех особенностей вашего состояния.
            </Typography>
            <br />
            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                В ситуациях отказа от госпитализации, приходя на помощь:
            </Typography>
            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                - Применяем глубокие знания специфики госпитализации для пожилых граждан.
                <br />
                - Предлагаем неограниченное сопровождение 24/7, гарантируя
                непревзойденный уровень заботы и профессиональной поддержки.
            </Typography>
        </Box>
    );
};
