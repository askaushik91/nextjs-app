'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';

// SVG Icons
const HeartIcon = ({ className, filled }: { className?: string; filled?: boolean }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill={filled ? '#ff3040' : 'none'}
    stroke={filled ? '#ff3040' : 'currentColor'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const CommentIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const ShareIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const BookmarkIcon = ({ className, filled }: { className?: string; filled?: boolean }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const GridIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const TagIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const VerifiedIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
  >
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const SmileIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

interface Comment {
  id: number;
  username: string;
  text: string;
  avatar: string;
  time: string;
  liked: boolean;
}

interface FeedItem {
  id: string;
  type: 'post' | 'reel' | 'tagged';
  image: string;
  caption: string;
  likes: number;
  commentsCount: number;
  time: string;
  playCount?: string;
  initialComments: Comment[];
}

const feedData: FeedItem[] = [
  // --- POSTS ---
  {
    id: 'post-1',
    type: 'post',
    image: '/images/image1.jpg',
    caption: 'Fresh lettuce harvest this morning! Direct from our fields to your table. 🥬💚 Ensuring organic nutrition and crisp taste in every bite. #organic #farmfresh #gillorganics #healthyeating',
    likes: 1242,
    commentsCount: 4,
    time: '2 HOURS AGO',
    initialComments: [
      { id: 1, username: 'vancouver_foodie', text: 'These look incredibly fresh! Do you deliver to downtown Vancouver?', avatar: '/images/mantaj.webp', time: '1h', liked: false },
      { id: 2, username: 'nature_lover99', text: 'Beautiful vibrant green. Sustainable farming at its absolute best! 🌾🙌', avatar: '/images/baljeet.webp', time: '45m', liked: true },
      { id: 3, username: 'chef_julian', text: 'Just ordered a bulk batch for our seasonal menu. Exciting!', avatar: '/images/mantaj.webp', time: '30m', liked: false }
    ]
  },
  {
    id: 'post-2',
    type: 'post',
    image: '/images/image2.jpg',
    caption: 'The beauty of sustainable farming. Soil health is our top priority! A healthy soil ecosystem breeds nutrient-rich, flavorful organic crops. 🌱🌾 #sustainablefarming #soilhealth #organicfood #gillorganics',
    likes: 894,
    commentsCount: 3,
    time: '1 DAY AGO',
    initialComments: [
      { id: 1, username: 'agri_student', text: 'So true! Organic soil structure is everything. Keep up the great education.', avatar: '/images/baljeet.webp', time: '20h', liked: false },
      { id: 2, username: 'healthy_lifestyle', text: 'Love seeing how and where my food is grown! Transparent farming.', avatar: '/images/mantaj.webp', time: '18h', liked: true }
    ]
  },
  {
    id: 'post-3',
    type: 'post',
    image: '/images/image3.jpg',
    caption: 'Ripe and juicy organic tomatoes, sun-kissed and ready. 🍅✨ What’s your favorite recipe with fresh farm tomatoes? Tell us in the comments! #organicgrowing #tomatoes #harvestseason #farmtotable',
    likes: 1530,
    commentsCount: 3,
    time: '3 DAYS AGO',
    initialComments: [
      { id: 1, username: 'marinara_master', text: 'Definitely slow-roasted tomato sauce! The natural sweetness is unmatched.', avatar: '/images/baljeet.webp', time: '2d', liked: true },
      { id: 2, username: 'organic_mom', text: 'My kids eat them raw like apples! So sweet.', avatar: '/images/mantaj.webp', time: '1d', liked: false }
    ]
  },
  {
    id: 'post-4',
    type: 'post',
    image: '/images/image4.jpg',
    caption: 'Crisp carrots freshly dug from the fertile soil of Gill Farms. 🥕🧡 Taste the sweetness and crunch of true organic care. Perfect for juicing or roasting! #organiccarrots #farmfresh #healthyeats #gillorganics',
    likes: 978,
    commentsCount: 2,
    time: '5 DAYS AGO',
    initialComments: [
      { id: 1, username: 'juicing_daily', text: 'Perfect for my morning carrot-ginger shots! 🥕⚡', avatar: '/images/mantaj.webp', time: '4d', liked: false },
      { id: 2, username: 'culinary_arts', text: 'Beautiful carrots! Glazed with organic honey, they are a masterpiece.', avatar: '/images/baljeet.webp', time: '3d', liked: true }
    ]
  },
  {
    id: 'post-5',
    type: 'post',
    image: '/images/image5.jpg',
    caption: 'Healthy green leafy goodness. Perfect for summer salads, green smoothies, and nutrient-dense wraps. 🥗🌿 Nourish your body with clean, chemical-free greens. #eatgreen #healthylifestyle #organicfarming',
    likes: 1102,
    commentsCount: 2,
    time: '1 WEEK AGO',
    initialComments: [
      { id: 1, username: 'smoothie_queen', text: 'Added a handful of this kale to my green smoothie today! Delicious.', avatar: '/images/baljeet.webp', time: '6d', liked: false },
      { id: 2, username: 'fitness_couple', text: 'We buy this every week. Best greens in town!', avatar: '/images/mantaj.webp', time: '5d', liked: true }
    ]
  },
  {
    id: 'post-6',
    type: 'post',
    image: '/images/image6.jpg',
    caption: 'Sunset over our organic crop rows. Peaceful evenings at the farm after a long, productive day. 🌅🚜 Proud of our team working tirelessly to bring you the best. #farmlife #sunset #organiccrops #gillorganics',
    likes: 1845,
    commentsCount: 2,
    time: '1 WEEK AGO',
    initialComments: [
      { id: 1, username: 'country_roads', text: 'This looks so peaceful. Beautiful shot!', avatar: '/images/mantaj.webp', time: '6d', liked: true },
      { id: 2, username: 'farming_futures', text: 'Such tidy rows! Real craftsmanship in farming.', avatar: '/images/baljeet.webp', time: '5d', liked: false }
    ]
  },

  // --- REELS ---
  {
    id: 'reel-1',
    type: 'reel',
    image: '/images/image7.jpg',
    caption: 'Day in the life of an organic farmer! 🌾🚜 Morning checks, harvesting fresh produce, sorting, and loading delivery boxes. It is hard work but so rewarding! #reels #dayinthelife #organicfarmer #agrilife',
    likes: 2540,
    commentsCount: 3,
    time: '2 DAYS AGO',
    playCount: '14.2K',
    initialComments: [
      { id: 1, username: 'dream_farm', text: 'This is my dream! Thanks for sharing a sneak peek of your day.', avatar: '/images/baljeet.webp', time: '1d', liked: true },
      { id: 2, username: 'worker_bee', text: 'What time do you guys start in the morning? Looks like 5am!', avatar: '/images/mantaj.webp', time: '1d', liked: false }
    ]
  },
  {
    id: 'reel-2',
    type: 'reel',
    image: '/images/WhyChooseUs.webp',
    caption: 'How we ensure 100% organic quality at Gill Organics. From testing soil purity to avoiding chemical pesticides, we stay true to nature. 🧪🔬 #qualitytest #organicstandards #reels #sustainability',
    likes: 1980,
    commentsCount: 2,
    time: '4 DAYS AGO',
    playCount: '9.8K',
    initialComments: [
      { id: 1, username: 'conscious_consumer', text: 'Appreciate this dedication to quality. Makes me feel safe buying from you.', avatar: '/images/mantaj.webp', time: '3d', liked: true },
      { id: 2, username: 'green_alliance', text: 'Excellent standards. This is what true organic is about.', avatar: '/images/baljeet.webp', time: '2d', liked: false }
    ]
  },
  {
    id: 'reel-3',
    type: 'reel',
    image: '/images/aboutCore.webp',
    caption: 'Quick farm tour! Walk through our green tunnels with us and see how our tender crops thrive. 🌿🚶‍♂️ Schedule a live visit on our website. #farmtour #greenhouse #reels #locallife',
    likes: 3420,
    commentsCount: 3,
    time: '6 DAYS AGO',
    playCount: '22.5K',
    initialComments: [
      { id: 1, username: 'travel_bc', text: 'Adding this farm tour to my weekend itinerary!', avatar: '/images/baljeet.webp', time: '5d', liked: true },
      { id: 2, username: 'kid_approved', text: 'Took my students here last month. Highly educational and fun!', avatar: '/images/mantaj.webp', time: '4d', liked: false }
    ]
  },

  // --- TAGGED ---
  {
    id: 'tagged-1',
    type: 'tagged',
    image: '/images/baljeet_gill.png',
    caption: 'Our founder, Baljeet Gill, sharing organic farming techniques with visitors today! 👨‍🌾🤝 Educating the next generation on eco-friendly crop management. Tagged by @agriculture_weekly #leadersinagriculture #sustainablefarming',
    likes: 752,
    commentsCount: 1,
    time: '3 DAYS AGO',
    initialComments: [
      { id: 1, username: 'agriculture_weekly', text: 'Thank you Baljeet for the amazing interview and insights!', avatar: '/images/baljeet.webp', time: '2d', liked: true }
    ]
  },
  {
    id: 'tagged-2',
    type: 'tagged',
    image: '/images/mantaj_sidhu.png',
    caption: 'Co-founder Mantaj Sidhu inspecting the new smart irrigation setup. 💧🌾 Using tech to optimize water usage and conserve resources. Tagged by @agri_tech_daily #smartfarming #waterconservation',
    likes: 684,
    commentsCount: 2,
    time: '5 DAYS AGO',
    initialComments: [
      { id: 1, username: 'agri_tech_daily', text: 'Fascinating tech in play! Full article on our profile link.', avatar: '/images/mantaj.webp', time: '4d', liked: true },
      { id: 2, username: 'eco_monitor', text: 'Smart irrigation is key for future food security. Love this!', avatar: '/images/baljeet.webp', time: '4d', liked: false }
    ]
  },
  {
    id: 'tagged-3',
    type: 'tagged',
    image: '/images/aboutImage.webp',
    caption: 'Loved visiting Gill Organics! Highly recommend their farm tour and fresh produce baskets. 🧺🍅 Fresh, nutritious, and local. Tagged by @healthyeats_vancouver #healthyeating #supportlocal #organictour',
    likes: 912,
    commentsCount: 2,
    time: '1 WEEK AGO',
    initialComments: [
      { id: 1, username: 'healthyeats_vancouver', text: 'Already ate all the strawberries! Simply amazing.', avatar: '/images/mantaj.webp', time: '6d', liked: true },
      { id: 2, username: 'gill.organics', text: 'Thank you for visiting! Hope to see you again soon.', avatar: '/images/baljeet.webp', time: '5d', liked: true }
    ]
  }
];

export function InstagramFeed() {
  const [activeTab, setActiveTab] = useState<'post' | 'reel' | 'tagged'>('post');
  const [selectedPost, setSelectedPost] = useState<FeedItem | null>(null);
  
  // Interactive States
  const [isFollowing, setIsFollowing] = useState(false);
  const [likedPosts, setLikedPosts] = useState<{ [key: string]: boolean }>({});
  const [likeCounts, setLikeCounts] = useState<{ [key: string]: number }>(() => {
    // Initialise like counts
    const counts: { [key: string]: number } = {};
    feedData.forEach((item) => {
      counts[item.id] = item.likes;
    });
    return counts;
  });
  const [commentsData, setCommentsData] = useState<{ [key: string]: Comment[] }>(() => {
    const data: { [key: string]: Comment[] } = {};
    feedData.forEach((item) => {
      data[item.id] = item.initialComments;
    });
    return data;
  });
  const [bookmarkedPosts, setBookmarkedPosts] = useState<{ [key: string]: boolean }>({});
  const [newCommentText, setNewCommentText] = useState('');
  
  // Visual effects
  const [showHeartAnim, setShowHeartAnim] = useState(false);
  const commentsEndRef = useRef<HTMLDivElement | null>(null);

  // Filter feed items based on active tab
  const filteredFeed = feedData.filter((item) => item.type === activeTab);

  // Handle follow toggle
  const handleFollowToggle = () => {
    setIsFollowing((prev) => !prev);
  };

  // Handle post liking
  const toggleLike = (postId: string) => {
    const isLiked = !!likedPosts[postId];
    setLikedPosts((prev) => ({ ...prev, [postId]: !isLiked }));
    setLikeCounts((prev) => ({
      ...prev,
      [postId]: prev[postId] + (isLiked ? -1 : 1),
    }));
  };

  // Double click photo to like (instagram style)
  const handleImageDoubleClick = (postId: string) => {
    if (!likedPosts[postId]) {
      toggleLike(postId);
    }
    setShowHeartAnim(true);
    setTimeout(() => {
      setShowHeartAnim(false);
    }, 1000);
  };

  // Toggle bookmark
  const toggleBookmark = (postId: string) => {
    setBookmarkedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  // Toggle like on a comment
  const toggleCommentLike = (postId: string, commentId: number) => {
    setCommentsData((prev) => {
      const postComments = prev[postId] || [];
      const updatedComments = postComments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, liked: !comment.liked };
        }
        return comment;
      });
      return { ...prev, [postId]: updatedComments };
    });
  };

  // Handle submission of a new comment
  const handleCommentSubmit = (e: React.FormEvent, postId: string) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      username: 'visitor_guest',
      text: newCommentText.trim(),
      avatar: '/images/baljeet.webp', // fallback guest avatar
      time: '1s',
      liked: false,
    };

    setCommentsData((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), newComment],
    }));

    setNewCommentText('');

    // Scroll to bottom of comments
    setTimeout(() => {
      if (commentsEndRef.current) {
        commentsEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Clean up overflow on body when modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPost]);

  return (
    <section className={styles.instagramSection}>
      <div className={styles.container}>
        
        {/* Section Heading */}
        <div className={styles.heading}>
          <span>Social Media Feed</span>
          <h2>Follow Us on Instagram</h2>
        </div>

        {/* Tabs Bar */}
        <div className={styles.tabBar}>
          <button 
            className={activeTab === 'post' ? styles.activeTab : ''} 
            onClick={() => setActiveTab('post')}
          >
            <GridIcon />
            POSTS
          </button>
          <button 
            className={activeTab === 'reel' ? styles.activeTab : ''} 
            onClick={() => setActiveTab('reel')}
          >
            <PlayIcon />
            REELS
          </button>
          <button 
            className={activeTab === 'tagged' ? styles.activeTab : ''} 
            onClick={() => setActiveTab('tagged')}
          >
            <TagIcon />
            TAGGED
          </button>
        </div>

        {/* Feed Grid */}
        <div className={styles.grid}>
          {filteredFeed.map((item) => (
            <div 
              key={item.id} 
              className={styles.gridItem}
              onClick={() => setSelectedPost(item)}
            >
              <Image 
                src={item.image} 
                alt={item.caption} 
                fill
                sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 400px"
              />

              {item.type === 'reel' && (
                <div className={styles.badgeIcon} title="Reel Video">
                  <PlayIcon />
                </div>
              )}

              <div className={styles.overlay}>
                <div className={styles.stat}>
                  <HeartIcon filled />
                  <span>{likeCounts[item.id]}</span>
                </div>
                <div className={styles.stat}>
                  <CommentIcon />
                  <span>{commentsData[item.id]?.length || 0}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {selectedPost && (
        <div className={styles.modalOverlay} onClick={() => setSelectedPost(null)}>
          <button className={styles.closeButton} onClick={() => setSelectedPost(null)}>
            <CloseIcon />
          </button>

          <div 
            className={styles.modalContent} 
            onClick={(e) => e.stopPropagation()} // Prevent closing
          >
            {/* Left Image Section */}
            <div 
              className={styles.imageSection}
              onDoubleClick={() => handleImageDoubleClick(selectedPost.id)}
            >
              <Image 
                src={selectedPost.image} 
                alt="Instagram post zoom" 
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                priority
              />

              <div className={`${styles.heartAnimation} ${showHeartAnim ? styles.animate : ''}`}>
                <HeartIcon filled />
              </div>
            </div>

            {/* Right Details Section */}
            <div className={styles.detailsSection}>
              
              {/* Modal Header */}
              <div className={styles.modalHeader}>
                <div className={styles.userProfile}>
                  <div className={styles.modalAvatar}>
                    <Image 
                      src="/images/GillOrganicsLogo.png" 
                      alt="Gill Organics profile" 
                      fill 
                      sizes="36px"
                    />
                  </div>
                  <div className={styles.userName}>
                    gill.organics
                    <span title="Verified Profile"><VerifiedIcon /></span>
                  </div>
                </div>

                <button 
                  className={`${styles.modalFollowBtn} ${isFollowing ? styles.following : ''}`}
                  onClick={handleFollowToggle}
                >
                  {isFollowing ? 'Following' : 'Follow'}
                </button>
              </div>

              {/* Comments/Captions Area */}
              <div className={styles.commentsArea}>
                {/* Caption (treated as first comment by profile) */}
                <div className={styles.commentItem}>
                  <div className={styles.commentAvatar}>
                    <Image 
                      src="/images/GillOrganicsLogo.png" 
                      alt="Profile" 
                      fill 
                      sizes="32px"
                    />
                  </div>
                  <div className={styles.commentTextWrap}>
                    <span className={styles.commentUser}>gill.organics</span>
                    <span className={styles.commentContent}>{selectedPost.caption}</span>
                    <div className={styles.commentMeta}>
                      <span>{selectedPost.time}</span>
                    </div>
                  </div>
                </div>

                {/* Users Comments */}
                {(commentsData[selectedPost.id] || []).map((comment) => (
                  <div key={comment.id} className={styles.commentItem}>
                    <div className={styles.commentAvatar}>
                      <Image 
                        src={comment.avatar} 
                        alt={comment.username} 
                        fill 
                        sizes="32px"
                      />
                    </div>
                    <div className={styles.commentTextWrap}>
                      <span className={styles.commentUser}>{comment.username}</span>
                      <span className={styles.commentContent}>{comment.text}</span>
                      <div className={styles.commentMeta}>
                        <span>{comment.time}</span>
                        <button>Reply</button>
                      </div>
                    </div>
                    
                    <button 
                      className={`${styles.commentLikeBtn} ${comment.liked ? styles.commentLiked : ''}`}
                      onClick={() => toggleCommentLike(selectedPost.id, comment.id)}
                    >
                      <HeartIcon filled={comment.liked} />
                    </button>
                  </div>
                ))}
                <div ref={commentsEndRef} />
              </div>

              {/* Action Panel */}
              <div className={styles.actionPanel}>
                <div className={styles.iconRow}>
                  <div className={styles.leftIcons}>
                    <button 
                      className={likedPosts[selectedPost.id] ? styles.liked : ''}
                      onClick={() => toggleLike(selectedPost.id)}
                    >
                      <HeartIcon filled={likedPosts[selectedPost.id]} />
                    </button>
                    <button onClick={() => {
                      // Focus the input field
                      const input = document.getElementById('modal-comment-input');
                      if (input) input.focus();
                    }}>
                      <CommentIcon />
                    </button>
                    <button onClick={() => alert('Link copied to clipboard! (Simulated)')}>
                      <ShareIcon />
                    </button>
                  </div>

                  <button 
                    className={bookmarkedPosts[selectedPost.id] ? styles.bookmarked : ''}
                    onClick={() => toggleBookmark(selectedPost.id)}
                  >
                    <BookmarkIcon filled={bookmarkedPosts[selectedPost.id]} />
                  </button>
                </div>

                <div className={styles.likesCount}>
                  {likeCounts[selectedPost.id].toLocaleString()} likes
                </div>

                <div className={styles.postTime}>
                  {selectedPost.time}
                </div>
              </div>

              {/* Comment Input */}
              <div className={styles.inputPanel}>
                <button className={styles.emojiBtn} title="Insert Emoji" onClick={() => setNewCommentText(p => p + ' 💚')}>
                  <SmileIcon />
                </button>

                <form onSubmit={(e) => handleCommentSubmit(e, selectedPost.id)}>
                  <input 
                    id="modal-comment-input"
                    type="text" 
                    placeholder="Add a comment..."
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                  />
                  <button 
                    type="submit" 
                    className={styles.submitBtn}
                    disabled={!newCommentText.trim()}
                  >
                    Post
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
