import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const WeRespondBlock = () => {
    return (
        <Box
            component="section"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >

            <Typography variant="h2"
                        sx={{ color: 'var(--main-color)', marginBottom: '20px', fontSize: { xs: '22px', sm: '34px' }, fontWeight: 500 }}>
                Наши преимущества:
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <CheckIcon sx={{ color: 'var(--red)' }} />
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                    Быстрота оформления
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <CheckIcon sx={{ color: 'var(--red)' }} />
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                    Доступность современных условий
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <CheckIcon sx={{ color: 'var(--red)' }} />
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                    Выбор специалиста
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <CheckIcon sx={{ color: 'var(--red)' }} />
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                    Индивидуальный подход
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <CheckIcon sx={{ color: 'var(--red)' }} />
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                    Современное оборудование
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <CheckIcon sx={{ color: 'var(--red)' }} />
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                    Гибкость в лечении
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <CheckIcon sx={{ color: 'var(--red)' }} />
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                    Минимизация бюрократии
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <CheckIcon sx={{ color: 'var(--red)' }} />
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                    Повышенный уровень сервиса
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <CheckIcon sx={{ color: 'var(--red)' }} />
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                    Конфиденциальность
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <CheckIcon sx={{ color: 'var(--red)' }} />
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                    Дополнительные услуги
                </Typography>
            </Box>
        </Box>
    );
};
