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
                        sx={{
                            color: 'var(--main-color)',
                            marginBottom: '20px',
                            fontSize: { xs: '22px', sm: '34px' },
                            fontWeight: 500
                        }}>
                Почему именно мы?
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                <Box component="span" sx={{ color: 'var(--red)', fontWeight: 600 }}>МСК</Box> предоставляет
                эксклюзивную помощь при госпитализации (как срочной, так и плановой), где наша команда провела
                всесторонний анализ систем работы лучших клиник:
            </Typography>
            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                - Владеем актуальными расценками на отдельные палаты.
                <br />
                - Подбираем стационар с учётом медицинских и личных особенностей.
            </Typography>
            <br />
            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '10px' }}>
                При отказе в госпитализации:
            </Typography>
            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                - Используем экспертизу в госпитализации пожилых пациентов.
                <br />
                - Обеспечиваем непрерывное сопровождение 24/7 с полным контролем и поддержкой.
            </Typography>
        </Box>
    );
};
