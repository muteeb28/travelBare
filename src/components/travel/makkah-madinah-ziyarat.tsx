"use client";
import React from "react";
import { ExpandableCard, Card } from "@/components/ui/expandable-card";

export function MakkahMadinahZiyarat() {
  const cards: Card[] = [
    {
      title: "Masjid Aisha (Taneem)",
      description: "The Miqat Point",
      src: "/ziyarat/masjid-aisha.jpg",
      ctaText: "Read More",
      content: (
        <div className="space-y-4">
          <p>
            The <strong>Miqat point</strong> for Makkah residents and visitors already in Makkah who wish to perform Umrah.
            This mosque marks the boundary where pilgrims enter the state of Ihram for Umrah.
          </p>
          <p>
            The mosque features beautiful Islamic architecture with ornate chandeliers and provides facilities for pilgrims
            to prepare for their sacred journey. It is approximately 7 kilometers from Masjid al-Haram.
          </p>
          <p>
            <strong>Spiritual Significance:</strong> Entering Ihram from this point allows pilgrims to begin their Umrah
            journey with proper intention and spiritual preparation.
          </p>
        </div>
      ),
    },
    {
      title: "Mount Arafat",
      description: "The Day of Hajj",
      src: "/ziyarat/mount-arafah.jpg",
      ctaText: "Read More",
      content: (
        <div className="space-y-4">
          <p>
            The granite hill where <strong>Prophet Muhammad (PBUH)</strong> delivered his farewell sermon. This is the most
            important location during the Hajj pilgrimage, where millions of pilgrims gather on the Day of Arafat.
          </p>
          <p>
            Standing at Arafat is the most crucial ritual of Hajj. Pilgrims spend the afternoon in earnest supplication,
            seeking Allah's forgiveness and mercy. The Prophet said, "Hajj is Arafat."
          </p>
          <p>
            <strong>Historical Importance:</strong> This sacred place witnessed the Prophet's final sermon, where he
            emphasized equality, justice, and the completion of Islam as a religion.
          </p>
        </div>
      ),
    },
    {
      title: "Cave of Hira",
      description: "Place of First Revelation",
      src: "/ziyarat/cave-of-hira.jpg",
      ctaText: "Read More",
      content: (
        <div className="space-y-4">
          <p>
            The sacred cave on <strong>Jabal al-Nour</strong> (Mountain of Light) where Prophet Muhammad (PBUH) received
            the first revelation of the Quran through Angel Jibril when he was 40 years old.
          </p>
          <p>
            The Prophet would spend days in solitude here, contemplating and meditating. It was during one of these
            retreats that the first verses of Surah Al-Alaq were revealed, marking the beginning of Islamic revelation.
          </p>
          <p>
            <strong>Visiting the Cave:</strong> Pilgrims climb this mountain to connect with the beginning of Islamic
            revelation and reflect on the Prophet's spiritual journey. The climb takes about 1-2 hours.
          </p>
        </div>
      ),
    },
    {
      title: "Jannat al-Mualla",
      description: "The Historical Cemetery",
      src: "/ziyarat/jannat-al-mualla.jpg",
      ctaText: "Read More",
      content: (
        <div className="space-y-4">
          <p>
            The historic cemetery of Makkah where many <strong>companions of Prophet Muhammad (PBUH)</strong> and members
            of his family are buried, including his first wife Khadijah (RA), his grandfather Abdul Muttalib, and his uncle Abu Talib.
          </p>
          <p>
            This sacred ground reminds visitors of the temporary nature of this world and the importance of preparing for
            the hereafter. It serves as a powerful reminder of mortality and the Day of Judgment.
          </p>
          <p>
            <strong>Historical Note:</strong> The cemetery holds great Islamic heritage, though many original grave markers
            were removed. Pilgrims visit to remember the righteous predecessors and reflect on life's purpose.
          </p>
        </div>
      ),
    },
    {
      title: "Masjid al-Jummah",
      description: "First Friday Prayer",
      src: "/ziyarat/masjid-al-jummah.jpg",
      ctaText: "Read More",
      content: (
        <div className="space-y-4">
          <p>
            The mosque where <strong>Prophet Muhammad (PBUH)</strong> led the first Friday prayer (Jummah) after his
            migration to Madinah. This historic event established the importance of congregational Friday prayers in Islam.
          </p>
          <p>
            The mosque features beautiful white Islamic architecture with traditional domes and minarets, representing
            the establishment of the Islamic community in Madinah. It has been renovated several times while maintaining
            its historical significance.
          </p>
          <p>
            <strong>Religious Importance:</strong> This mosque commemorates the establishment of one of Islam's most
            important weekly obligations and the gathering of the Muslim community.
          </p>
        </div>
      ),
    },
    {
      title: "Quba Mosque",
      description: "The First Mosque",
      src: "/ziyarat/masjd-quba-new.jpg",
      ctaText: "Read More",
      content: (
        <div className="space-y-4">
          <p>
            The <strong>first mosque</strong> built by Prophet Muhammad (PBUH) upon his arrival in Madinah. The Prophet
            himself participated in its construction, carrying stones and building alongside his companions.
          </p>
          <p>
            Offering two units of prayer (two Rakah) here is equivalent to performing an Umrah according to authentic
            Hadith. The Prophet used to visit this mosque every Saturday, either riding or on foot.
          </p>
          <p>
            <strong>Spiritual Merit:</strong> This mosque holds special significance as the foundation of the Muslim
            community and continues to be a place of great blessing. Many pilgrims make it a point to pray here during
            their visit to Madinah.
          </p>
        </div>
      ),
    },
    {
      title: "Cave of Thawr",
      description: "The Refuge of Migration",
      src: "/ziyarat/Cave-of-Thawr-4-1024x577.jpg",
      ctaText: "Read More",
      content: (
        <div className="space-y-4">
          <p>
            The cave where <strong>Prophet Muhammad (PBUH)</strong> and Abu Bakr (RA) took refuge during their migration
            from Makkah to Madinah. Located on Jabal Thawr, about 4 kilometers south of Makkah.
          </p>
          <p>
            The Quraysh pursuers came so close to the cave that Abu Bakr (RA) feared for their safety, but the Prophet
            reassured him saying, "Do not grieve; indeed Allah is with us" (Quran 9:40). Miraculously, a spider spun a
            web and a dove nested at the entrance, concealing them.
          </p>
          <p>
            <strong>Lesson of Trust:</strong> This cave represents complete faith in Allah, trust in His protection, and
            the miraculous assistance that comes to those who rely on Him. It is a powerful reminder of Allah's help in
            times of difficulty.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <ExpandableCard cards={cards} />
    </div>
  );
}
