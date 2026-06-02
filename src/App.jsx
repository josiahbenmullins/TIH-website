import React from 'react';
import { BookOpen, Feather, Mail, Sparkles } from 'lucide-react';

const featureBlocks = [
  {
    type: 'quote',
    eyebrow: 'Choice',
    quote: 'Can a lie exist in heaven? Find out with Jen as the truth runs after her.',
    note: 'If you had the opportunity to sneak into heaven, would you take it? Join the journey to find out what happens!',
    image: '/images/jen-wall.png',
    alt: 'Jen looking through the wall into Heaven',
    visualHeight: '460px',
    imageFit: 'cover',
    imagePosition: 'center',
  },
  {
    type: 'image',
    eyebrow: 'Journey',
    title: 'What happens when you "Don’t Belong" in heaven?',
    description: 'Walk with Jen as she learns to find her place and avoid being found out.',
    image: '/images/Manthana.png',
    alt: 'A watercolor gate into Heaven',
    visualHeight: '460px',
    imageFit: 'cover',
    imagePosition: 'center',
  },
  {
  type: 'quote',
  eyebrow: 'Wonder',
  quote: 'Friendship, Exploration, Discovery and Deceit all in a land far stranger than Jen ever imagined',
  note: 'Jen learns she isn’t the only one in heaven, and keeping her secret is getting harder and harder...',
  image: '/images/jen-sam.png',
  alt: 'Jen and Sam exploring the abbey',
  visualHeight: '460px',
  imageFit: 'cover',
  imagePosition: 'center',
},
  {
    type: 'image',
    eyebrow: 'Truth',
    title: 'Will Jen succeed in weaving her story, or will the truth find her out?',
    description: 'When Jen decides to try to avoid judgment, did she just forfeit mercy as well? Will she have the courage to tell the truth, or be able to continue her ruse?',
    image: '/images/justice.png',
    alt: 'Jen standing at the threshold',
    visualHeight: '460px',
    imageFit: 'cover',
    imagePosition: 'center',
  },
  {
    type: 'quote',
    eyebrow: 'Running',
    quote: 'No one ever talks about how to escape heaven; Jen discovers it might be harder than expected...',
    note: 'Heaven is stranger than Jen expected. It becomes even more so after she discovers she is trapped with no way out...',
    image: '/images/running.png',
    alt: 'The patched wall into Heaven',
  },
  {
    type: 'image',
    eyebrow: 'Wisdom',
    title: 'Journey with Jen into a strange country that might just cost her everything.',
    description: 'Will Jen choose to confront the truth or keep running from her past?',
    image: '/images/hermit-2.png',
    alt: 'The strange country of Heaven',
  },
];

function FeatureBlock({ item, index }) {
  const isImage = item.type === 'image';

  return (
    <article className={`feature-block ${isImage ? 'image-feature' : 'quote-feature'} ${index % 2 ? 'reverse' : ''}`}>
      <div
        className="feature-visual"
        aria-hidden="true"
        style={{
          minHeight: item.visualHeight || '330px',
        }}
      >
        <img
          src={item.image}
          alt={item.alt}
          className="feature-image"
          style={{
            objectFit: item.imageFit || 'cover',
            objectPosition: item.imagePosition || 'center',
          }}
        />
      </div>
      <div className="feature-copy">
        {isImage ? (
          <>
            <p className="eyebrow"><Sparkles size={15} /> {item.eyebrow || 'Artwork'}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </>
        ) : (
          <>
            <p className="eyebrow"><Feather size={15} /> {item.eyebrow}</p>
            <blockquote>{item.quote}</blockquote>
            <p>{item.note}</p>
          </>
        )}
      </div>
    </article>
  );
}

function App() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Trapped In Heaven home">
          <span className="brand-mark"><Sparkles size={18} /></span>
          <span>Trapped In Heaven</span>
        </a>
        <div className="nav-links">
          <a href="#story">Story</a>
          <a href="#glimpses">Glimpses</a>
          <a href="#author">Author</a>
          <a href="#updates">Updates</a>
        </div>
      </nav>

      <section id="top" className="top-banner" aria-label="Watercolor banner artwork placeholder">
        <img
          src="/images/jen-wall.png"
          alt="Jen looking through the wall into Heaven"
          className="banner-image"
        />
      </section>

      <section className="title-section section-shell">
        <p className="eyebrow centered"><Sparkles size={16} /> A Christian fantasy novel</p>
        <h1>Trapped In Heaven</h1>
        <p className="hero-tagline">Heaven was supposed to be the end of fear. For Jen, it is where the mystery begins.</p>
        <div className="button-row centered-row">
          <a className="button primary" href="#updates">Join the Update List</a>
          <a className="button secondary" href="#story">Read an Intro to the Story</a>
        </div>
      </section>

      <section id="story" className="story-section section-shell">
        <div className="story-card">
          <p className="eyebrow"><BookOpen size={16} /> The story</p>
          <h2>Can you bring a lie into heaven? Jen discovers what happens when you do...</h2>
          <p>
            Jen never expected to be afraid to enter the next life, but when she arrived, Heaven seemed beyond her grasp. When she finds a secret way in, she thinks all her problems are solved. Little did she know, what started out as a small lie would follow her. She finds herself in a beautifully terrifying and radiantly strange place. The question is, can she keep up the act? She wouldn’t have to if she just came in the right way — but Jen soon finds out that escaping Heaven is more difficult than she supposed. </p>
          <p>
            <strong>Trapped In Heaven</strong> is a Christian fantasy for children and adults: a story of wonder, judgment, mercy, courage, and the strange hope that shines brightest when every false thing is stripped away. Heaven may just be a place where truth cannot be hidden and every step draws us deeper into a mystery far grander than ourselves.
          </p>
        </div>
      </section>

      <section id="glimpses" className="glimpses section-shell">
        <div className="section-heading">
          <p className="eyebrow centered"><Feather size={16} /> Quotes & pictures</p>
          <h2>Small glimpses from the world beyond the veil</h2>
          <p>
            Preview below some of the themes you can expect to find in the upcoming novel "Trapped In Heaven". A fantasy novel for Christians young and old, who want something fun, thrilling, and mysterious. 
          </p>
        </div>

        <div className="feature-list">
          {featureBlocks.map((item, index) => (
            <FeatureBlock item={item} index={index} key={`${item.type}-${index}`} />
          ))}
        </div>
      </section>

      <section id="author" className="author-section section-shell">
        <div className="author-card">
          <div className="author-copy">
            <p className="eyebrow"><BookOpen size={16} /> About the Author</p>
            <h2>Meet the author behind Trapped In Heaven</h2>
            <p>
              Hi, my name is Josiah, and I believe a story can teach a lesson in one page
              that would take a skilled philosopher three hundred pages to explain. That is
              why I love stories — especially fantasy.
            </p>
            <p>
              I want to write tales filled with symbolism, truth, choices, wonder, and
              imagination. The idea for <strong>Trapped In Heaven</strong> came to me
              almost entirely fully formed, which made the journey of writing it even more
              daunting. I wanted to stay true to the vision while also balancing work and the demands of being a husband and father.
              Ultimately, I wanted to write something I would enjoy reading and something
              my children would enjoy as well. I figure, if I like it, maybe someone else
              will too.
            </p>
            <p>
              <strong>Trapped In Heaven</strong> is not meant to be a literal rendering of
              what Heaven is actually like. Rather, it is meant to be a catalyst — a story
              that prompts us to think more deeply about our relationship with God, the
              choices we make, and what our expectation is for the life to come.
            </p>
            <p>
              I believe that when artists are given ideas like this, they are also given a
              responsibility to complete them. That conviction became one of my strongest
              motivations to finish this work.
              I am deeply thankful to my wife and children for their patience,
              encouragement, and support throughout this endeavor. I could not have done it
              without them. Most of all, I am thankful for, and awe-inspired by, the grace
              and love Christ has given us all.
            </p>
            <p>
              May this book bless you, the reader, and inspire your imagination to soar to
              new heights.
            </p>
          </div>
          <div className="author-photo">
            <img
              src="/images/author.jpeg"
              alt="Author portrait"
            />
          </div>
        </div>
      </section>

      <section id="updates" className="updates section-shell">
        <div className="updates-card">
          <div>
            <p className="eyebrow"><Mail size={16} /> Pre-order & updates</p>
            <h2>Be first to hear when the gates open.</h2>
            <p>
              Join the update list for release news, preview chapters, artwork, preorder announcements, and behind-the-scenes glimpses into the world of <strong>Trapped In Heaven</strong>.
            </p>
          </div>
          <form className="signup-form" action="https://formspree.io/f/mqejvpww" method="POST">
            <input type="hidden" name="list" value="Trapped In Heaven Update List" />
            <input type="hidden" name="source" value="TIH Website" />

            <label htmlFor="email">Email address</label>

            <div className="input-row">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
              <button type="submit">Join</button>
            </div>

            <p className="form-note">
              Join the update list for release news, artwork, preview chapters, and preorder announcements.
            </p>
          </form>
        </div>
      </section>

      <footer className="footer section-shell">
        <div>
          <h2>Trapped In Heaven</h2>
          <p>A Christian fantasy novel following Jen into wonder, danger, mercy, and the mystery beyond death.</p>
        </div>
        <div className="footer-links">
          <a href="#story">Story</a>
          <a href="#glimpses">Glimpses</a>
          <a href="#updates">Updates</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
