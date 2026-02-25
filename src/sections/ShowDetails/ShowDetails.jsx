import './ShowDetails.scss'
import SliderNavigation from '@/components/Slider/components/SliderNavigation'
import Slider from '@/components/Slider'
import PersonCard from '@/components/PersonCard'
import Button from '@/components/Button'
import ReviewCard from '@/components/ReviewCard'
import Icon from '@/components/Icon'
import Tags from '@/components/Tags'
import Ratings from '@/components/Ratings'

const ShowDetails = (props) => {
  const {
    seasons,
  } = props

  const titleId = 'show-details-title'
  const castSliderNavigationId = 'show-cast-slider-navigation-id'

  const castItems = [
    { imgSrc: '/src/assets/images/people/11.jpg', imgAlt: 'Winona Ryder' },
    { imgSrc: '/src/assets/images/people/12.jpg', imgAlt: 'David Harbour' },
    { imgSrc: '/src/assets/images/people/13.jpg', imgAlt: 'Millie Bobby Brown' },
    { imgSrc: '/src/assets/images/people/14.jpg', imgAlt: 'Finn Wolfhard' },
    { imgSrc: '/src/assets/images/people/15.jpg', imgAlt: 'Gaten Matarazzo' },
    { imgSrc: '/src/assets/images/people/16.jpg', imgAlt: 'Caleb McLaughlin' },
    { imgSrc: '/src/assets/images/people/17.jpg', imgAlt: 'Noah Schnapp' },
    { imgSrc: '/src/assets/images/people/18.jpg', imgAlt: 'Sadie Sink' },
    { imgSrc: '/src/assets/images/people/13.jpg', imgAlt: 'Maya Hawke' },
  ]

  const reviewItems = [
    {
      name: 'Bob Ross',
      subtitle: 'From UK',
      description: 'Stranger Things absolutely lives up to all the hype. This worldwide phenomenon has been one of the most talked about shows since it came out back in 2016 and for good reason...it\'s terrific! It\'s an absolute blast to watch and will keep you entertained throughout the entire series. This has everything a show needs to be great...action, comedy, drama, suspense, even nostalgia with this show. You really come to care for these characters and what happens to them. Obviously, season 1 was the best but the others are not far off. All are absolutely worth watching.',
      ratingValue: 4.5,
    },
    {
      name: 'Philipp Johnes',
      subtitle: 'From USA',
      description: 'Started watching without much expectations but I got so carryd away I finished season 1 in one day and it went on so that I finished the hole series in 5 days. And directly started rewatching it. And I still loved every single second of it this is 100% shure in my top 3 series oat. And I have watched some good series for sure.',
      ratingValue: 5,
    },
    {
      name: 'Victoria McKensy',
      subtitle: 'From Ireland',
      description: 'When I first watched Stranger Things Season 1 years ago, I genuinely thought it was one of the greatest shows of the decade. I loved how it reminded me of Freaks and Geeks. It was a perfect blend of quirky humour, eerie otherworldly mystery, childhood nostalgia, and gripping suspense centred on the search for Will. I remember feeling deeply sorry for Eleven, wanting to adopt her and protect her at all costs. Seeing what the writers ultimately did with her character is honestly heartbreaking and incredibly disappointing.',
      ratingValue: 2.5,
    },
    {
      name: 'Georg Patrushev',
      subtitle: 'From Russia',
      description: 'It was exhausting to watch. It wasn\'t even entertainingly bad. It is an entire season of all the poorest writing decisions thrown together. If I knew then what I know now I would\'ve skipped it. The only reason I stuck with watching the final season to the end was my personal issue with sunken costs. Watch it if you don\'t value your time or if you have nothing else to do. I went into it expecting nothing and I was still let down.',
      ratingValue: 3,
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This show was recommended to me by a very dear friend who went for the show by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This show was recommended to me by a very dear friend who went for the show by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This show was recommended to me by a very dear friend who went for the show by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This show was recommended to me by a very dear friend who went for the show by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
  ]


  return (
    <section
      className="show-details container"
      aria-labelledby={titleId}
    >
      <h2 className="visually-hidden" id={titleId}>
        Detailed show information
      </h2>
      <div className="show-details__main">
        {seasons && (
          <div className="show-details__panel show-details__panel--seasons">
            <div className="show-details__group show-details__group--big-gap-y">
              <h3 className="h4">Seasons and Episodes</h3>
              {seasons}
            </div>
          </div>
        )}
        <div className="show-details__panel show-details__panel--description">
          <div className="show-details__group">
            <h3 className="show-details__title">
              Description
            </h3>
            <div className="show-details__description">
              <p>In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.</p>
            </div>
          </div>
        </div>
        <div className="show-details__panel">
          <header className="show-details__panel-header">
            <h3 className="show-details__title">
              Cast
            </h3>
            <SliderNavigation
              id={castSliderNavigationId}
              buttonMode="black-08"
              mode="rounded"
              hasPagination={false}
            />
          </header>
          <Slider
            navigationTargetElementId={castSliderNavigationId}
            hasScrollbarOnMobile={false}
            sliderParams={{
              slidesPerView: 'auto',
              spaceBetween: 10,
              breakpoints: {
                1024: {
                  slidesPerView: 'auto',
                  spaceBetween: 20,
                  allowTouchMove: false,
                }
              }}}
          >
            {castItems.map((castItem, index) => (
              <PersonCard {...castItem} key={index} />
            ))}
          </Slider>
        </div>
        <div className="show-details__panel">
          <header className="show-details__panel-header">
            <h3 className="show-details__title">
              Reviews
            </h3>
            <Button
              mode="black-08"
              iconName="plus"
              label="Add your review"
              href="/"
            />
          </header>
          <Slider
            navigationMode="rounded"
            isNavigationHiddenMobile={false}
            hasScrollbarOnMobile={false}
            sliderParams={{
              slidesPerView: 2,
              slidesPerGroup: 2,
              breakpoints: {
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  allowTouchMove: false,
                  spaceBetween: 20,
                },
              }
            }}
          >
            {reviewItems.map((reviewItem , index) => (
              <ReviewCard {...reviewItem} key={index} />
            ))}
          </Slider>
        </div>
      </div>
      <aside className="show-details__info">
        <div className="show-details__panel">
          <div className="show-details__groups">
            <div className="show-details__group">
              <h3 className="show-details__title">
                <Icon name="calendar" />
                <span>Released Year</span>
              </h3>
              <div className="show-details__description">
                <time className="h6" dateTime="2016">2016</time>
              </div>
            </div>
            <div className="show-details__group">
              <h3 className="show-details__title">
                <Icon name="translate" />
                <span>Available Languages</span>
              </h3>
              <Tags
                items={['English', 'Spanish', 'German', 'Dutch','Italian','French', 'Russian']}
              />
            </div>
            <div className="show-details__group show-details__panel--large-gap-y">
              <h3 className="show-details__title">
                <Icon name="star" />
                <span>Ratings</span>
              </h3>
              <Ratings
                items={[
                  { title: 'IMDb', ratingValue: 4.7 },
                  { title: 'Streamvibe', ratingValue: 5 },
                ]}
              />
            </div>
            <div className="show-details__group">
              <h3 className="show-details__title">
                <Icon name="genres" />
                <span>Genres</span>
              </h3>
              <Tags items={['Action', 'Adventure', 'Horror', 'Drama']} />
            </div>
            <div className="show-details__group">
              <h3 className="show-details__title">
                Director
              </h3>
              <PersonCard
                name="The Duffer Brothers"
                subtitle="From the USA"
                imgSrc="/src/assets/images/people/director2.jpg"
              />
            </div>
            <div className="show-details__group">
              <h3 className="show-details__title">
                Music
              </h3>
              <PersonCard
                name="Kyle Dixon"
                subtitle="From the USA"
                imgSrc="/src/assets/images/people/music2.jpg"
              />
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default ShowDetails