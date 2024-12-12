import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const MainInfoBlock = () => {
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
                Экстренная платная госпитализация: когда время решает всё
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                Здравствуйте! <Box component="span" sx={{ color: 'var(--main-color)', fontWeight: 600 }}>МСК-Групп</Box> с радостью открывает свои
                двери для каждого пациента — здесь приоритет отдается
                заботе о вашем благополучии и безупречному комфорту. Наша миссия охватывает не только жителей Москвы, но
                и распространяется на широкую географию России и стран СНГ.
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                В <Box component="span" sx={{ color: 'var(--main-color)', fontWeight: 600 }}>МСК-Групп</Box> госпитализация становится
                исключительным опытом: каждый шаг продуман с целью обеспечить
                максимальную удобность и безопасность.
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                Мы берем на себя организацию транспортировки из регионов, включая страны ближнего зарубежья, прямо в
                специализированные клиники. Встреча иногородних пациентов осуществляется профессиональной командой скрой
                помощи — будь то вокзал или аэропорт.
            </Typography>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, marginBottom: '20px' }}>
                В экстренных ситуациях скорость и качество медицинской помощи становятся решающими факторами. Наша
                платная экстренная госпитализация гарантирует незамедлительный доступ к лучшим врачам, независимо от
                времени суток. В МСК-Групп вы получаете не просто помощь — это забота о вашем здоровье и жизни в
                критический момент. Выбирая нас, вы обеспечиваете себя надежной поддержкой профессионалов 24/7.
                <br />
                <br />
                <Box component="span" sx={{ color: 'var(--main-color)', fontWeight: 600 }}>В любое время суток - оперативно, доступно</Box>
            </Typography>

            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant='h3' sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Квалифицированные мастера своего дела
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Наши медики – это команда опытных врачей, сестёр и профильных экспертов, непрерывно
                    совершенствующих свои навыки. Мы гарантируем вам доступ к элите медицинских кадров страны.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant='h3' sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Инновационное оснащение
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Применяем самые передовые технологии и оборудование мирового уровня для точной диагностики и лечения
                    с наилучшими результатами в уходе за пациентами.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant='h3' sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Персонализация подхода
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Каждому клиенту – свой протокол: разрабатываем индивидуальные стратегии исцеления, учитывая все
                    нюансы здоровья. Ваше благополучие – наш приоритет номер один.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant='h3' sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Уют и комфорт пребывания
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Палаты оснащены всем для вашего спокойствия и восстановления: создаем атмосферу заботы о каждом
                    пациенте, способствующую скорейшему выздоровлению.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant='h3' sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Многоступенчатый подход к лечению
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    От поступления до выписки – полный спектр медицинской помощи включает реабилитацию и последующее
                    наблюдение. Мы всегда рядом для поддержки на каждом этапе.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography variant='h3' sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Помощь в госпитализации
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Организуем приём из всех уголков России и СНГ: от консультаций до транспортировки, обеспечивая
                    безупречный сервис с первого шага к здоровью.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--main-color)' }} />
                    <Typography cvariant='h3' sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 500 }}>
                        Финансовая ясность
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                    Открытая система расчётов и подробные финансовые консультации – для уверенного планирования ваших
                    затрат на лечение.
                </Typography>
            </Box>

            <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 } }}>
                Выбирайте <Box component="span" sx={{ fontWeight: 600,  color: 'var(--main-color)', }}>МСК-Групп</Box> – ваш надёжный спутник в путешествии к здоровью. Мы гарантируем непрерывную
                поддержку и профессиональную заботу, где бы вы ни находились – мы всегда рядом!
            </Typography>
        </Box>
    );
};
