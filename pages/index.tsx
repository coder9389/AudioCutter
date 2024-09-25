// pages/index.tsx
import Head from 'next/head';
import { useState, useRef } from 'react';
import { Button, Title, Text } from '@mantine/core';
import { IconMusic, IconScissors, IconVolume, IconWaveSawTool } from '@tabler/icons-react'; // Import Mantine icons
import styles from '@/styles/Home.module.css';

const Home: React.FC = () => {
  // State to control which section is active
  const [activeSection, setActiveSection] = useState<string>('home');

  // State to control sidebar visibility
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  // Ref for file input
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  // Handle file selection
  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Render content based on the active section
  const renderContent = () => {
    switch (activeSection) {
      case 'howToWork':
        return (
          <>
            <section className={styles.description}>
              <Title order={1} align="center">How to Cut Audio</Title>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <p>This app can be used to trim and/or cut audio tracks, remove an audio fragment, and fade in/out your music for a smooth experience.</p>
                <br />
                <p>This app can also trim audio to the desired length efficiently.</p>
                <br />
                <p>Select the audio file you want to edit.</p>
                <br />
                <p>Use the slider to choose the start and end points for the cut.</p>
                <br />
                <p>Click the "Cut" button to process your audio.</p>
                <br />
              </ul>
            </section>
            <Title order={2} align="center">Privacy and Security Guaranteed</Title>
            <section className={styles.description}>
              <Text>This is a serverless app. Your files do not leave your device.</Text>
            </section>
          </>
        );
      case 'joiner':
        return (
          <section className={styles.description}>
            <Title order={2} align="center">Audio Joiner</Title>
            <Text align="center">Join multiple audio tracks into one. Choose audio files you want to merge.</Text>
            <form className={styles.form}>
              <input
                type="file"
                accept="audio/*"
                ref={fileInputRef}
                style={{ display: 'none' }} // Hide the file input
                onChange={(e) => console.log(e.target.files)} // Handle file selection
              />
              <Button
                variant="outline"
                className={styles.browseButton}
                onClick={handleFileSelect}
              >
                Browse My Files
              </Button>
            </form>
          </section>
        );
      case 'remover':
        return (
          <section className={styles.description}>
            <Title order={2} align="center">Audio Remover</Title>
            <Text>Remove vocals from your audio tracks.</Text>
          </section>
        );
      case 'splitter':
        return (
          <section className={styles.description}>
            <Title order={2} align="center">Audio Splitter</Title>
            <Text>Split your audio tracks into multiple segments.</Text>
          </section>
        );
      case 'pitcher':
        return (
          <section className={styles.description}>
            <Title order={2} align="center">Audio Pitcher</Title>
            <Text>Change the pitch of your audio tracks.</Text>
          </section>
        );
      case 'keyFinder':
        return (
          <section className={styles.description}>
            <Title order={2} align="center">Key BPM Finder</Title>
            <Text>Find the key and BPM of your audio tracks.</Text>
          </section>
        );
      case 'cutter':
        return (
          <section className={styles.description}>
            <Title order={2} align="center">Audio Cutter</Title>
            <Text>Trim your audio tracks to the desired length.</Text>
          </section>
        );
      case 'karaoke':
        return (
          <section className={styles.description}>
            <Title order={2} align="center">Karaoke Mode</Title>
            <Text>Sing along to your favorite tracks with vocals removed.</Text>
          </section>
        );
      default:
        return (
          <>
            <section className={styles.description}>
              <Title order={2} align="center">Audio Joiner</Title>
              <Text align="center">Join multiple audio tracks into one. Choose audio files you want to merge.</Text>
              <form className={styles.form}>
                <input
                  type="file"
                  accept="audio/*"
                  ref={fileInputRef}
                  style={{ display: 'none' }} // Hide the file input
                  onChange={(e) => console.log(e.target.files)} // Handle file selection
                />
                <Button
                  variant="outline"
                  className={styles.browseButton}
                  onClick={handleFileSelect}
                >
                  Browse My Files
                </Button>
              </form>
            </section>
            <Title order={1} align="center">How to Cut Audio</Title>
            <section className={styles.description}>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <p>This app can be used to trim and/or cut audio tracks, remove an audio fragment, and fade in/out your music for a smooth experience.</p>
                <br />
                <p>Select the audio file you want to edit.</p>
                <br />
                <p>Use the slider to choose the start and end points for the cut.</p>
                <br />
                <p>Click the "Cut" button to process your audio.</p>
                <br />
              </ul>
            </section>
            <Title order={2} align="center">Privacy and Security Guaranteed</Title>
            <section className={styles.description}>
              <Text>This is a serverless app. Your files do not leave your device.</Text>
            </section>
          </>
        );
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Vocal Remover and Isolation</title>
      </Head>

      <div className={styles.wrapper}>
        {/* Top Navigation */}
        <nav className={styles.topNav}>
          <ul style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '0' }}>
            <li style={{ margin: '0 15px' }}>
              <a href="#" onClick={() => setActiveSection('howToWork')} style={{ color: '#ccc', textDecoration: 'none' }}>How to Work</a>
            </li>
            <li style={{ margin: '0 15px' }}>
              <a href="#" onClick={() => setActiveSection('joiner')} style={{ color: '#ccc', textDecoration: 'none' }}>Joiner</a>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div className={styles.hamburger} onClick={toggleSidebar}>
            &#9776;
          </div>
        </nav>

        {/* Sidebar */}
        <nav className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
          <ul>
            <li>
              <a href="#" onClick={() => setActiveSection('remover')}>
                <IconVolume size={16} color="blue" style={{ marginRight: '8px' }} /> Remover
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setActiveSection('splitter')}>
                <IconWaveSawTool size={16} color="green" style={{ marginRight: '8px' }} /> Splitter
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setActiveSection('pitcher')}>
                <IconScissors size={16} color="orange" style={{ marginRight: '8px' }} /> Pitcher
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setActiveSection('keyFinder')}>
                <IconMusic size={16} color="purple" style={{ marginRight: '8px' }} /> Key BPM Finder
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setActiveSection('cutter')}>
                <IconScissors size={16} color="red" style={{ marginRight: '8px' }} /> Cutter
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setActiveSection('joiner')}>
                <IconMusic size={16} color="cyan" style={{ marginRight: '8px' }} /> Joiner
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setActiveSection('karaoke')}>
                <IconVolume size={16} color="magenta" style={{ marginRight: '8px' }} /> Karaoke
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Content Area */}
        <div className={styles.mainContent}>
          <header className={styles.header}>
            <Title order={1} align="center">Vocal Remover and Isolation</Title>
          </header>

          <main className={styles.main}>
            {renderContent()}
          </main>
        </div>
      </div>
       {/* Logo at the bottom center */}
       <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Text size="xl" weight={700}>@Bhaweshsammal</Text>
      </div>
    </div>
  );
};

export default Home;
