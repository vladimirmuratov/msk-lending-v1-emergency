import { Box, Typography } from '@mui/material';

export const AboutBlock = () => {
    return (
        <Box
            component="section"
            id="about"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >

            <Typography variant="h2"
                        sx={{ color: 'var(--main-color)', marginBottom: '20px', fontSize: { xs: '22px', sm: '34px' }, fontWeight: 500 }}>
                О нас
            </Typography>

            <Typography
                component="p"
                sx={{
                    fontSize: { xs: 18, sm: 20 },
                    // marginBottom: '10px'
                }}
            >
                С момента основания, <Box component="span" sx={{ color: 'var(--main-color)', fontWeight: 600 }}>МСК-Групп</Box> на протяжении десятилетия обеспечивает непрерывную поддержку: оформление
                неотложной госпитализации и специализированного транспортирования больных непосредственно в топ-клиники
                Москвы.
            </Typography>
        </Box>
    );
};
