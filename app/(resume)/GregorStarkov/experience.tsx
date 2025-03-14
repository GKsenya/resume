'use client'

import { CompanyCard } from '@/components/companyCard';
import { Project } from '@/components/project';
import { Title } from '@/components/title';
import { ActionIcon, Box, Divider, Flex, Group, List, ListItem, Stack, Text, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconExternalLink } from '@tabler/icons-react';

export const Experience = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(767)})`);
  return (
    <Box
      px={{ base: '6vw', lg: '10vw' }}
      py={{ base: '6vh', lg: '10vh' }}
      bg='white'
      id='experience'
    >
      <Title label='Опыт работы' />
      <Stack gap={isMobile ? 40 : 80} mt={{ base: 'md', sm: 'xl' }}>
        <Flex
          wrap="nowrap"
          align='flex-start'
          gap={0}
          direction={{ base: 'column', sm: 'row' }}
        >
          <CompanyCard
            fromTo='02/2021 - 03/2025'
            period='4 года 1 месяц'
            name='ООО "Интабия"'
            position='iOS разработчик'
            city='Новосибирск'
            link='https://intabia.ru'
            number={isMobile ? 1 : undefined}
          />
          <Divider
            mx={{ sm: 'lg', lg: 'xl' }}
            orientation='vertical'
            color='dark.0'
            visibleFrom='sm'
          />
          <Divider
            orientation='horizontal'
            color='dark.0'
            hiddenFrom='sm'
            label="Проекты внутри компании"
            w='-webkit-fill-available'
          />
          <Stack
            gap='xl'
            style={isMobile ? { paddingTop: '2vh' } : {}}
          >
            <Project
              name='SimonsVoss'
              link=' https://www.simons-voss.com/en'
              subtitle='Немецкий производитель беспроводных замковых систем'
              goal='Заменить использование физических ключей на управление замками со смартфона.'
              architecture='MVVM'
              technologies={{
                languages: ['Swift', 'Objective-C', 'Kotlin Multiplatform', 'C', 'C++'],
                uiLibraries: ['Storyboard', 'XIB'],
                frameworks: ['CryptoSwift', 'CommonCtypto', 'Realm', 'Alamofire', 'Swinject']
              }}
              additionalInfo={(
                <Group gap={4}>
                  <Text fw={600}>Читать о проекте в кейсах</Text>
                  <Group wrap='nowrap' gap={4}>
                    <Text fw={600}>компании</Text>
                    <ActionIcon
                      variant='transparent'
                      component='a'
                      href='https://intabia.ru/cases/simons-voss-transponder'
                      color='deepBlue.5'
                      mt='auto'
                      target='_blank'
                    >
                      <IconExternalLink />
                    </ActionIcon>
                  </Group>
                </Group>
              )}
              description={(
                <Stack gap='xs'>

                  <Text fw={300}>
                    Разрабатывал мобильное приложение в команде из 5 человек: 2 iOS-разработчика, Android-разработчик,
                    аналитик, тимлид.
                  </Text>
                  <Text >Основные задачи:</Text>
                  <List>
                    <ListItem>Отвечал за верстку пользовательского интерфейса (Storyboard, XIB)</ListItem>
                    <ListItem>Настраивал взаимодействие между C/C++, Objective-C и Swift</ListItem>
                  </List>

                  <Text>Работа с BLE и интеграция библиотек:</Text>
                  <List>
                    <ListItem>
                      В проекте использовались библиотеки для связи умных замков со смартфоном по протоколу BLE,
                      разработанные командой из Германии на C/C++
                    </ListItem>
                    <ListItem>
                      Реализовал Bridge на Objective-C для интеграции этих библиотек и обеспечения их
                      взаимодействия с кодом на Swift
                    </ListItem>
                  </List>

                  <Text >Безопасность и авторизация:</Text>
                  <List>
                    <ListItem>Настроил авторизацию пользователей через OAuth2</ListItem>
                    <ListItem>
                      Обеспечил безопасность приложения, используя библиотеку CryptoSwift, затем выполнил
                      миграцию на нативную CommonCrypto
                    </ListItem>
                  </List>

                  <Text >Работа с KMM и SDK:</Text>
                  <List>
                    <ListItem>
                      Исправлял ошибки, связанные с работой Ktor KMM plugin (бета-версия) при выполнении сетевых запросов
                    </ListItem>
                    <ListItem>
                      Настроил взаимодействие интерфейсов Shared-модуля KMM с iOS-компонентами UI в рамках разработки SDK.
                      SDK позволял компаниям, имеющим собственные приложения для администрирования бизнеса (офисы, гостиницы,
                      медицинские учреждения и т. д.), управлять умными системами открытия дверей
                    </ListItem>
                    <ListItem>
                      Например, гостиница могла интегрировать SDK в свое приложение, чтобы предоставить персоналу
                      клининга доступ к замкам для уборки номеров после гостей
                    </ListItem>
                  </List>

                  <Text>Завершение проекта:</Text>
                  <List>
                    <ListItem>
                      Разработка была остановлена в феврале 2022 года по инициативе заказчика в связи с политической
                      ситуацией
                    </ListItem>
                  </List>
                </Stack>
              )}
            />

            <Project
              name="Госуслуги"
              subtitle='Сервис предоставления государственных услуг РФ'
              link='https://apps.apple.com/ru/app/%D0%B3%D0%BE%D1%81%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B8-%D1%8F%D0%BA%D1%83%D1%82%D0%B8%D0%B8/id1536067698?l=en-GB'
              goal='Разработать приложение с нуля для предоставления государственных услуг гражданам РФ
                для конкретного региона.'
              architecture='MVVM'
              technologies={{
                languages: ['Swift', 'Kotlin Multiplatform'],
                uiLibraries: ['Storyboard', 'XIB'],
                frameworks: ['SVProgressHUD', 'SwiftyMenu', 'Firebase Messaging', 'R.swift']
              }}
              description={(
                <Stack gap='xs'>
                  <Text fw={300}>
                    Принимал участие в разработке приложения в составе команды заказчика из 7 человек: iOS-разработчик,
                    Android-разработчик, аналитик, Product manager, тестировщик, 2 backend-разработчика.
                  </Text>
                  <Text >Основные задачи:</Text>
                  <List>
                    <ListItem>Верстка UI</ListItem>
                    <ListItem>Выпуск обновлений в App Store.</ListItem>
                    <ListItem>Настройка интеграции shared-модуля на Kotlin Multiplatform</ListItem>
                  </List>
                  <Text fw={300}>
                    Состоялся релиз для приложения республики Саха (Якутия).
                  </Text>
                </Stack>
              )}
            />

            <Project
              name='НовосибирскЭнергоСбыт'
              link='https://www.nskes.ru/'
              subtitle='Оператор коммунальных услуг'
              goal='Внести изменения в функционал оплаты услуг с использованием эквайринга банка ГПБ.
              Разработать функционал отображения рейтинга платежеспособности клиента.'
              architecture='MVC'
              technologies={{
                languages: ['Swift'],
                uiLibraries: ['Storyboard', 'XIB'],
                frameworks: [
                  'Alamofire',
                  'PhoneNumberKit',
                  'SwiftyMenu',
                  'Firebase Messaging',
                  'FBSDKCoreKit',
                  'YandexMobileMetrica',
                ]
              }}
              description={(
                <Stack gap='xs'>
                  <Text fw={300}>
                    Работая в составе команды заказчика, вносил изменения в функционал
                    эквайринга банка ГПБ для регионов Челябинска и Кемерово.
                  </Text>
                  <Text fw={300}>
                    Разработал и реализовал функционал отображения рейтинга платежеспособности клиента
                    в соответствии с дизайн-макетами из Figma. Выпустил обновление в App Store.
                  </Text>
                  <Text fw={300}>Прошел полный цикл разработки, включая:</Text>
                  <List>
                    <ListItem>создание аналитической записки</ListItem>
                    <ListItem>согласование на архитектурном комитете</ListItem>
                    <ListItem>разработку и код-ревью (MR)</ListItem>
                    <ListItem>регрессионное тестирование перед релизом</ListItem>
                    <ListItem>согласование выпуска и одобрение обновления в App Store</ListItem>
                    <ListItem>финальное регрессионное тестирование релизной сборки</ListItem>
                    <ListItem>подготовку документации с описанием всех внесенных изменений</ListItem>
                  </List>
                </Stack>
              )}
            />

            <Project
              name='BPC'
              link='https://www.bpcbt.com/about-us'
              subtitle='Платежный шлюз'
              goal='Провести тестирование SDK 3DS в среде FIME EMVCo и получить сертификат соответствия
              требованиям безопасности для версий 2.1 и 2.2.'
              architecture='MVC'
              technologies={{
                languages: ['Swift'],
                uiLibraries: ['Storyboard', 'XIB'],
                frameworks: ['URLSession']
              }}
              description={(
                <Stack gap='xs'>
                  <Text fw={300}>
                    Было успешно проведено свыше 600 тестов в соответствии со стандартами FIME EMVCo Visa & Mastercard, включая:</Text>
                  <List>
                    <ListItem>проверку потока сообщений (message flow)</ListItem>
                    <ListItem>тестирование графического интерфейса (GUI: native, HTML)</ListItem>
                    <ListItem>оценку безопасности (Security)</ListItem>
                    <ListItem>тестирование производительности (Performance)</ListItem>
                    <ListItem>проверку содержания сообщений (message content)</ListItem>
                    <ListItem>обработку ошибок сообщений (message error)</ListItem>
                    <ListItem>тестирование обработки сообщений (message processing)</ListItem>
                  </List>
                  <Text fw={300}>
                    Внесены необходимые изменения для соответствия требованиям.</Text>
                  <Text fw={300}>
                    По итогам тестирования компания получила сертификат соответствия стандартам безопасности,
                    что позволило распространять SDK на рынки Европы и США.
                  </Text>
                </Stack>
              )}
            />
          </Stack>
        </Flex>

        <Flex
          wrap="nowrap"
          align='flex-start'
          gap={0}
          direction={{ base: 'column', sm: 'row' }}
        >
          <CompanyCard
            fromTo='04/2020 - 10/2020'
            period='7 месяцев'
            name='ООО "Маяк"'
            position='Инженер отдела сопровождения и разработки программного обеспечения'
            city='Иркутск'
            link='https://www.slata.ru/'
            number={isMobile ? 2 : undefined}
          />
          <Divider
            mx={{ sm: 'lg', lg: 'xl' }}
            orientation='vertical'
            color='dark.0'
            visibleFrom='sm'
          />
          <Divider
            orientation='horizontal'
            color='dark.0'
            hiddenFrom='sm'
            label="Проект внутри компании"
            w='-webkit-fill-available'
          />
          <Stack
            style={isMobile ? { paddingTop: '2vh' } : {}}
          >
            <Project
              name='Моя Слата'
              subtitle='Сеть супермаркетов'
              goal='Перевести действующее приложение, написанное на Xamarin, на Swift, выпустить приложение в AppStore.'
              technologies={{
                languages: ['Swift'],
                uiLibraries: ['Storyboard', 'XIB'],
                frameworks: [
                  'Realm',
                  'BarcodeScanner',
                  'YandexMobileMetrica',
                  'FacebookSDK (аналитика)',
                  'Firebase Messaging',
                  'URLSession',
                ]
              }}
              description={(
                <Stack gap='xs'>
                  <Text fw={300}>Разработал нативное клиентское приложение "Моя Слата".</Text>
                  <Text fw={300}>Пользователь имел следующие возможности:</Text>
                  <List>
                    <ListItem>Получить информацию о купонах на скидку в магазине</ListItem>
                    <ListItem>Посмотреть каталог акционных товаров</ListItem>
                    <ListItem>
                      Воспользоваться программой лояльности "Фреш-Карта",
                      которая позволяла предоставить кассиру штрих код и списать бонусные баллы.
                    </ListItem>
                    <ListItem>Отсканировать штрих-код товара в магазине для уточнения стоимости.</ListItem>
                  </List>
                  <Text fw={300}>
                    После разработки приложения был выпущен релиз с последующими выпусками обновлений,
                    в которых вносились изменения, повышающие работоспособность приложения.
                  </Text>
                </Stack>
              )}
              imgUrls={[
                '/GregorStarkov/my-slata-1.jpg',
                '/GregorStarkov/my-slata-2.jpg',
                '/GregorStarkov/my-slata-3.jpg',
                '/GregorStarkov/my-slata-4.jpg',
                '/GregorStarkov/my-slata-5.jpg',
                '/GregorStarkov/my-slata-6.jpg',
              ]}
            />
          </Stack>
        </Flex>
      </Stack>
    </Box>
  )
};
