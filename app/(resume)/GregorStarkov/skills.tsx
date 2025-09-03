import { Grid, GridCol } from '@mantine/core';
import { IconArchive, IconBroadcast, IconBuildingArch, IconCode, IconDatabase, IconDeviceAnalytics, IconFilePlus, IconGeometry, IconLayout, IconMap, IconNotification, IconPackage, IconRocket, IconShieldCode, IconStack3, IconWall } from '@tabler/icons-react';
import { ResumeSection, TechnologiesGroupCardV2 } from 'components';
import { ReactElement } from 'react';

const data = [
  {
    name: 'Языки',
    items: ['Swift', 'Objective-C'],
  },
  {
    name: 'Ul & Layout',
    items: ['UIKit', 'SwiftUl', 'Storyboard', 'Programmatic Ul', 'Anchors', 'SnapKit', 'PinLayout'],
  },
  {
    name: 'Хранение данных',
    items: ['Core Data', 'SwiftData', 'Realm', 'Keychain', 'UserDefaults', 'NSCache'],
  },
  {
    name: 'Архитектуры',
    items: ['MVP', 'MVC', 'MVVM', 'VIPER', 'Clean Swift', 'TCA'],
  },
  {
    name: 'Работа с сетью',
    items: ['URLSession', 'Alamofire', 'Moya'],
  },
  {
    name: 'Модульность',
    items: [
      'Kotlin Multiplatform',
      'SPM',
      'Tuist',
    ]
  },
  {
    name: 'Менеджеры зависимостей',
    items: ['CocoaPods', 'Swift Package Manager'],
  },
  {
    name: 'Реактивное программирование',
    items: ['Combine'],
  },
  {
    name: 'Анимация',
    items: [
      'Lottie',
      'SVProgressHUD'
    ]
  },
  {
    name: 'Криптография',
    items: ['CryptoKit', 'CommonCrypto'],
  },



  {
    name: 'DI',
    items: [
      'Swinject',
      'Needle',
    ]
  },
  {
    name: 'CodeGen',
    items: [
      'R.swift',
      'Sourcery',
      'SwiftGen',
    ]
  },
  {
    name: 'Метрики',
    items: [
      'Яндекс.Метрика',
      'Facebook',
    ]
  },
  {
    name: 'Карты',
    items: ['Apple MapKit']
  },
  {
    name: 'Пуш уведомления',
    items: ['Firebase Messaging']
  },

  {
    name: 'Прочие фреймворки',
    items: [
      'SwiftyMenu',
      'PhoneNumberKit',
      'BarcodeScanner',
    ],
  },
];

const iconsMap: Record<string, ReactElement> = {
  Языки: (
    <IconCode
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'Ul & Layout': (
    <IconLayout
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'Хранение данных': (
    <IconDatabase
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  Криптография: (
    <IconShieldCode
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  Архитектуры: (
    <IconBuildingArch
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'Менеджеры зависимостей': (
    <IconPackage
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'Работа с сетью': (
    <IconBroadcast
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'Реактивное программирование': (
    <IconRocket
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'Анимация': (
    <IconGeometry
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'Модульность': (
    <IconWall
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'DI': (
    <IconArchive
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'CodeGen': (
    <IconFilePlus
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'Метрики': (
    <IconDeviceAnalytics
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'Карты': (
    <IconMap
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'Пуш уведомления': (
    <IconNotification
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
  'Прочие фреймворки': (
    <IconStack3
      size={24}
      style={{ minWidth: '24px' }}
    />
  ),
};

export const Skills = () => {
  if (!data || data.length === 0) return null;

  return (
    <ResumeSection
      id='skills'
      title='Навыки'
      color='white'
      variant='colored'
      backgroundSrc='/GregorStarkov/background-1.png'
    >
      <Grid
        mt={{ base: 'md', sm: 'xl' }}
        gutter={28}
      >
        {data.map(({ name, items }) => (
          <GridCol
            key={name}
            span={{ base: 12, xs: 6, md: 4, lg: 4, xl: 3, xxl: 2 }}
          >
            <TechnologiesGroupCardV2
              icon={iconsMap[name]}
              name={name}
              technologies={items}
            />
          </GridCol>
        ))}
      </Grid>
    </ResumeSection>
  );
};
