// ============================================================
// CONVERSATION TRANSLATIONS DATABASE - Multilingual
// ============================================================

const CONVERSATION_TRANSLATIONS = {
  "en": {
    "1": {
      "title": "Self Introduction",
      "turns": [
        {
          "text": "Hello! I am Anna. What is your name?"
        },
        {
          "prompt": "Introduce yourself and tell the partner your name",
          "options": [
            "Hello Anna! My name is Ahmad.",
            "Good day! My name is Ahmad."
          ]
        },
        {
          "text": "Pleased to meet you, Ahmad! Where do you come from?"
        },
        {
          "prompt": "Tell the partner your country of origin",
          "options": [
            "I come from Syria.",
            "I come from Egypt."
          ]
        },
        {
          "text": "Ah, nice! And where do you live now?"
        },
        {
          "prompt": "Tell the partner your current city",
          "options": [
            "I live in Berlin now.",
            "I live in Munich now."
          ]
        },
        {
          "text": "Berlin is great! Which languages do you speak?"
        },
        {
          "prompt": "Mention the languages you speak",
          "options": [
            "I speak Arabic and a little German.",
            "My mother tongue is Arabic. I am learning German now."
          ]
        },
        {
          "text": "Very good! Goodbye, Ahmad!"
        },
        {
          "prompt": "Say goodbye to the partner in an appropriate way",
          "options": [
            "Goodbye, Anna! Bye!",
            "Bye! See you soon!"
          ]
        }
      ]
    },
    "2": {
      "title": "Meeting in a Cafe",
      "turns": [
        {
          "text": "Hello! How are you doing today?"
        },
        {
          "prompt": "Reply that you are doing well and ask how the partner is doing",
          "options": [
            "Hello! I'm doing very well, thank you. And you?",
            "Thanks, good! And how are you?"
          ]
        },
        {
          "text": "I'm doing well too, thank you. Would you like to drink coffee or tea?"
        },
        {
          "prompt": "Order a cup of coffee with milk, please",
          "options": [
            "I would like a coffee with milk, please.",
            "A coffee with milk for me, please."
          ]
        },
        {
          "text": "Sure! I'll take a tea. What is your mobile number for later?"
        },
        {
          "prompt": "Give your phone number to the partner (0176...)",
          "options": [
            "My number is zero-one-seven-six-two-three-four.",
            "Here is my number: zero-one-seven-six-five-six-seven."
          ]
        },
        {
          "text": "Thank you, I've noted it down! See you next time!"
        },
        {
          "prompt": "Say goodbye to your friend and wish them a good day",
          "options": [
            "Bye! Have a nice day!",
            "Goodbye! See you soon!"
          ]
        }
      ]
    },
    "3": {
      "title": "At the Flea Market",
      "turns": [
        {
          "text": "Good day! Are you looking for something specific?"
        },
        {
          "prompt": "Say you are looking for a camera or a book and ask about the price",
          "options": [
            "Good day! I'm looking for a book. How much does this book cost?",
            "Hello! How much is this camera here?"
          ]
        },
        {
          "text": "The book costs 5 Euros. The camera costs 45 Euros. That's cheap!"
        },
        {
          "prompt": "Say the price is too high (expensive) and try to negotiate a lower price",
          "options": [
            "The book is cheap. I'll take the book.",
            "Oh, 45 Euros is too expensive! Is 35 Euros okay?"
          ]
        },
        {
          "text": "Well, okay, 35 Euros for the camera is fine. Will you take it?"
        },
        {
          "prompt": "Agree, say you will take it, and ask where to pay",
          "options": [
            "Yes, I'll take it. Thank you very much!",
            "Great, I'll take the camera for 35 Euros."
          ]
        },
        {
          "text": "Here you go. That makes 35 Euros."
        },
        {
          "prompt": "Pay the seller and thank them",
          "options": [
            "Here are 35 Euros. Thank you very much!",
            "Here you go, 35 Euros. Have a nice day!"
          ]
        }
      ]
    },
    "4": {
      "title": "Mornens and Appointments",
      "turns": [
        {
          "text": "Hello! When do you normally get up?"
        },
        {
          "prompt": "Tell them you usually wake up at 7 AM and eat breakfast at 7:30",
          "options": [
            "I get up at seven o'clock and eat breakfast at half past seven.",
            "Normally I get up at 7 o'clock, then I have breakfast."
          ]
        },
        {
          "text": "And when does your German course start?"
        },
        {
          "prompt": "Tell them the lesson starts at nine o'clock and ends at half past one",
          "options": [
            "The course starts at nine o'clock and ends at half past one.",
            "It starts at 9 o'clock and goes until 13:30."
          ]
        },
        {
          "text": "Oh, that is a long course! Do you have time on Friday evening? Shall we go to the cinema?"
        },
        {
          "prompt": "Apologize that you don't have time because of another appointment, and ask about Saturday",
          "options": [
            "I'm sorry, I don't have time on Friday. Does Saturday work?",
            "Unfortunately I have an appointment on Friday. How about Saturday?"
          ]
        },
        {
          "text": "Yes, Saturday at 6 PM fits well! See you Saturday!"
        },
        {
          "prompt": "Agree to the appointment and say goodbye",
          "options": [
            "Great! See you Saturday at 18:00. Bye!",
            "Deal! See you Saturday!"
          ]
        }
      ]
    },
    "5": {
      "title": "Grocery Shopping",
      "turns": [
        {
          "text": "Good day! What can I do for you?"
        },
        {
          "prompt": "Say you want to buy tomatoes and cheese and ask if they are fresh",
          "options": [
            "Good day! I need tomatoes and cheese. Are they fresh?",
            "Hello! I would like to buy tomatoes and cheese."
          ]
        },
        {
          "text": "Yes, everything is very fresh! How many tomatoes would you like?"
        },
        {
          "prompt": "Request one kilogram of tomatoes",
          "options": [
            "I would like one kilo of tomatoes, please.",
            "One kilo of tomatoes, please."
          ]
        },
        {
          "text": "Sure. And how much cheese would you like?"
        },
        {
          "prompt": "Request 300 grams of Swiss cheese",
          "options": [
            "Please give me 300 grams of cheese.",
            "I need three hundred grams of cheese, please."
          ]
        },
        {
          "text": "Here you go. Anything else?"
        },
        {
          "prompt": "Answer negatively and ask for the total cost",
          "options": [
            "No, thank you. That is all. How much does that cost?",
            "That is all, thank you. How much does it make?"
          ]
        },
        {
          "text": "That makes 9 Euros 40 in total, please."
        },
        {
          "prompt": "Give them a 10 Euro bill and tell them to keep the change",
          "options": [
            "Here are 10 Euros. Keep the change!",
            "Here you go. Ten Euros. Keep the change."
          ]
        }
      ]
    },
    "6": {
      "title": "Talking About Family",
      "turns": [
        {
          "text": "Hello! Do you live alone or with your family?"
        },
        {
          "prompt": "Say you are married and live with your family and children",
          "options": [
            "I am married and live with my family.",
            "I live together with my wife and my two children."
          ]
        },
        {
          "text": "Ah, how nice! How old are your children?"
        },
        {
          "prompt": "Tell them your daughter is 8 years old and your son is 5 years old",
          "options": [
            "My daughter is eight and my son is five years old.",
            "The daughter is 8 years old and the son is 5."
          ]
        },
        {
          "text": "And your parents? Do they also live here in Germany?"
        },
        {
          "prompt": "Tell them they live in your home country, but you talk on the phone with them often",
          "options": [
            "No, my parents live in my home country. But we talk on the phone often.",
            "They live in Egypt/Syria. I talk on the phone with them every day."
          ]
        },
        {
          "text": "That's good! Tomorrow is my sister's birthday. We are celebrating!"
        },
        {
          "prompt": "Congratulate his sister and wish her a happy birthday",
          "options": [
            "Happy birthday to your sister!",
            "All the best on her birthday!"
          ]
        }
      ]
    },
    "7": {
      "title": "Renting an Apartment",
      "turns": [
        {
          "text": "Good day! Are you calling regarding the 3-room apartment?"
        },
        {
          "prompt": "Confirm the call and ask about the total square meters of the apartment",
          "options": [
            "Yes, exactly. How big is the apartment actually?",
            "Good day! Yes, I am interested in the apartment. How many square meters is it?"
          ]
        },
        {
          "text": "The apartment is 85 square meters and also has a balcony."
        },
        {
          "prompt": "Ask about the cold rent and the cost of utilities and electricity",
          "options": [
            "How high is the cold rent? And how much are the utilities?",
            "How much is the warm rent?"
          ]
        },
        {
          "text": "The cold rent is 750 Euros. The utilities are 180 Euros."
        },
        {
          "prompt": "Ask what floor the apartment is on and if the building has an elevator",
          "options": [
            "Which floor is the apartment on? Is there an elevator?",
            "Is the apartment on the ground floor or on the first floor?"
          ]
        },
        {
          "text": "The apartment is on the third floor. But unfortunately, there is no elevator."
        },
        {
          "prompt": "Say you find the apartment suitable and ask about viewing it soon",
          "options": [
            "That's okay for me. Can I view the apartment?",
            "When is a viewing possible? I would like to see it."
          ]
        }
      ]
    },
    "8": {
      "title": "At the Doctor",
      "turns": [
        {
          "text": "Good day! What is wrong with you?"
        },
        {
          "prompt": "Explain to the doctor that you feel sick, have a severe headache, and a fever",
          "options": [
            "Good day, doctor. I feel very bad. I have a headache and a fever.",
            "I am sick. My head hurts and I have a fever."
          ]
        },
        {
          "text": "I see. Do you also have a sore throat or a cough?"
        },
        {
          "prompt": "Answer yes, your throat hurts too and you can't sleep well",
          "options": [
            "Yes, my throat hurts too and I cannot sleep.",
            "Yes, I have a sore throat since yesterday."
          ]
        },
        {
          "text": "You have a bad cold. I will prescribe you medication."
        },
        {
          "prompt": "Ask the doctor how many times a day you need to take this medicine",
          "options": [
            "How many times a day do I need to take the medicine?",
            "When should I take the medicine?"
          ]
        },
        {
          "text": "Twice daily, morning and evening after eating. Get well soon!"
        },
        {
          "prompt": "Thank him and say goodbye politely",
          "options": [
            "Thank you very much, doctor. Goodbye!",
            "Thank you very much for your help. Bye!"
          ]
        }
      ]
    },
    "9": {
      "title": "Asking for Directions",
      "turns": [
        {
          "text": "Excuse me! How do I get to the train station?"
        },
        {
          "prompt": "Tell the traveler to go straight ahead and then turn left",
          "options": [
            "Go straight ahead and then take the next street left.",
            "First go straight ahead, then turn left."
          ]
        },
        {
          "text": "Is the train station far from here?"
        },
        {
          "prompt": "Tell him it's not far, only a five-minute walk",
          "options": [
            "No, it is very close. Only five minutes on foot.",
            "It's not far, about 500 meters."
          ]
        },
        {
          "text": "Can I also take the bus?"
        },
        {
          "prompt": "Tell him yes, bus number 100 goes directly there",
          "options": [
            "Yes, bus line 100 goes directly there.",
            "Yes, take bus number 100."
          ]
        },
        {
          "text": "Great! Thank you very much for your help!"
        },
        {
          "prompt": "Respond with 'You're welcome' and wish him a good trip",
          "options": [
            "You're welcome! Have a good trip!",
            "You're welcome! Have a nice day!"
          ]
        }
      ]
    },
    "10": {
      "title": "Making Free Time Plans",
      "turns": [
        {
          "text": "Hello! What do you like to do most in your free time?"
        },
        {
          "prompt": "Tell him you like playing football and listening to music",
          "options": [
            "I like playing football very much and listening to music.",
            "In my free time I play football or read a book."
          ]
        },
        {
          "text": "Football is great! We are playing on Saturday. Do you want to come along?"
        },
        {
          "prompt": "Express your interest and ask what time you will start playing",
          "options": [
            "Yes, gladly! What time are you meeting?",
            "That sounds fun! When are you playing on Saturday?"
          ]
        },
        {
          "text": "We are playing on Saturday at 3 PM in the park. Just bring sports shoes."
        },
        {
          "prompt": "Confirm your attendance at the scheduled time and say you will definitely come",
          "options": [
            "Alright! I will come on Saturday at 15:00. See you then!",
            "Great, I'll be there on Saturday at three o'clock."
          ]
        }
      ]
    },
    "11": {
      "title": "Talking About Jobs",
      "turns": [
        {
          "text": "Hello! What is your profession?"
        },
        {
          "prompt": "Tell him your profession (e.g. computer engineer) and the company you work for",
          "options": [
            "I am an engineer by profession and work at a computer company.",
            "I work as a salesman in a supermarket."
          ]
        },
        {
          "text": "That's interesting! How many hours do you work per week?"
        },
        {
          "prompt": "Say you work 40 hours a week and your job is fun but tiring",
          "options": [
            "I work 40 hours per week. The work is fun, but it is stressful.",
            "I work forty hours. I like my job very much."
          ]
        },
        {
          "text": "I see. And what is your dream job?"
        },
        {
          "prompt": "Say your dream job is to work as a manager or software developer and earn a lot of money",
          "options": [
            "My dream job is software developer. I would like to work flexibly.",
            "I would like to be a successful cook and have my own restaurant."
          ]
        }
      ]
    },
    "12": {
      "title": "In the Restaurant",
      "turns": [
        {
          "text": "Good evening! Have you reserved a table?"
        },
        {
          "prompt": "Answer yes, you reserved a table for two under the name 'Ahmad'",
          "options": [
            "Good evening! Yes, we have reserved a table for two under the name Ahmad.",
            "Yes, a table for two. The name is Ahmad."
          ]
        },
        {
          "text": "Certainly, Mr. Ahmad. Here is your table. What would you like to drink?"
        },
        {
          "prompt": "Order a bottle of mineral water and an apple juice",
          "options": [
            "I would like a bottle of mineral water and an apple juice, please.",
            "Please bring me a water and a juice."
          ]
        },
        {
          "text": "With pleasure. And what would you like to eat?"
        },
        {
          "prompt": "Order tomato soup as a starter and schnitzel as the main course",
          "options": [
            "As a starter the tomato soup and as a main course the schnitzel.",
            "I'll take a soup and a schnitzel, please."
          ]
        },
        {
          "text": "Coming right up. (Later...) Was the food delicious? Would you like to pay?"
        },
        {
          "prompt": "Praise the food and ask for the bill",
          "options": [
            "Yes, the food was fantastic! The bill, please!",
            "It was very delicious. The bill, please."
          ]
        },
        {
          "text": "That makes 27 Euros 80 Cents in total."
        },
        {
          "prompt": "Give him 30 Euros and tell him to keep the change (tip)",
          "options": [
            "Here are 30 Euros. Keep the change!",
            "Keep the change. Make it 30 Euros."
          ]
        }
      ]
    }
  },
  "tr": {
    "1": {
      "title": "Kendini Tanıtma",
      "turns": [
        {
          "text": "Merhaba! Ben Anna. Senin adın ne?"
        },
        {
          "prompt": "Kendini tanıt ve adını ortağına söyle",
          "options": [
            "Merhaba Anna! Benim adım Ahmad.",
            "İyi günler! Benim adım Ahmad."
          ]
        },
        {
          "text": "Tanıştığımıza memnun oldum, Ahmad! Nereden geliyorsun?"
        },
        {
          "prompt": "Ortağına geldiğin ülkeyi söyle",
          "options": [
            "Suriye'den geliyorum.",
            "Mısır'dan geliyorum."
          ]
        },
        {
          "text": "Ah, güzel! Ve şimdi nerede yaşıyorsun?"
        },
        {
          "prompt": "Ortağına şimdi yaşadığın şehri söyle",
          "options": [
            "Şimdi Berlin'de yaşıyorum.",
            "Şimdi Münih'de yaşıyorum."
          ]
        },
        {
          "text": "Berlin harika! Hangi dilleri konuşuyorsun?"
        },
        {
          "prompt": "Konuştuğun dilleri belirt",
          "options": [
            "Arapça ve biraz Almanca konuşuyorum.",
            "Ana dilim Arapça. Şimdi Almanca öğreniyorum."
          ]
        },
        {
          "text": "Çok iyi! Görüşmek üzere, Ahmad!"
        },
        {
          "prompt": "Ortağına uygun bir şekilde veda et",
          "options": [
            "Görüşmek üzere, Anna! Hoşça kal!",
            "Görüşürüz! Yakında görüşmek üzere!"
          ]
        }
      ]
    },
    "2": {
      "title": "Kafede Buluşma",
      "turns": [
        {
          "text": "Merhaba! Bugün nasılsın?"
        },
        {
          "prompt": "İyi olduğunu söyle ve ortağının nasıl olduğunu sor",
          "options": [
            "Merhaba! Çok iyiyim, teşekkürler. Ya sen?",
            "Teşekkürler, iyiyim! Sen nasılsın?"
          ]
        },
        {
          "text": "Ben de iyiyim, teşekkürler. Kahve mi yoksa çay mı içmek istersin?"
        },
        {
          "prompt": "Lütfen bir fincan sütlü kahve isteyin",
          "options": [
            "Sütlü bir kahve rica ediyorum, lütfen.",
            "Benim için sütlü bir kahve lütfen."
          ]
        },
        {
          "text": "Memnuniyetle! Ben çay alıyorum. Sonrası için cep telefonu numaran nedir?"
        },
        {
          "prompt": "Telefon numaranı ortağına ver (0176...)",
          "options": [
            "Numaram sıfır-bir-yedi-altı-iki-üç-dört.",
            "İşte numaram: sıfır-bir-yedi-altı-beş-altı-yedi."
          ]
        },
        {
          "text": "Teşekkürler, kaydettim! Bir dahaki sefere görüşmek üzere!"
        },
        {
          "prompt": "Arkadaşına veda et ve ona iyi bir gün dile",
          "options": [
            "Görüşürüz! İyi günler!",
            "Görüşmek üzere! Yakında görüşürüz!"
          ]
        }
      ]
    },
    "3": {
      "title": "Bit Pazarında",
      "turns": [
        {
          "text": "İyi günler! Özel bir şey mi arıyorsunuz?"
        },
        {
          "prompt": "Bir kamera veya kitap aradığınızı söyleyin ve fiyatını sorun",
          "options": [
            "İyi günler! Bir kitap arıyorum. Bu kitabın fiyatı nedir?",
            "Merhaba! Buradaki bu kameranın fiyatı ne kadar?"
          ]
        },
        {
          "text": "Kitap 5 Euro. Kamera 45 Euro. Bu çok ucuz!"
        },
        {
          "prompt": "Fiyatın çok yüksek (pahalı) olduğunu söyleyin ve daha düşük bir fiyata pazarlık etmeye çalışın",
          "options": [
            "Kitap uygun fiyatlı. Kitabı alıyorum.",
            "Oh, 45 Euro çok pahalı! 35 Euro olur mu?"
          ]
        },
        {
          "text": "Pekala, kamera için 35 Euro olur. Alıyor musunuz?"
        },
        {
          "prompt": "Kabul edin, alacağınızı söyleyin ve nereye ödeyeceğinizi sorun",
          "options": [
            "Evet, alıyorum. Çok teşekkürler!",
            "Harika, kamerayı 35 Euro'ya alıyorum."
          ]
        },
        {
          "text": "Buyurun. Toplam 35 Euro yapıyor."
        },
        {
          "prompt": "Satıcıya ödeme yapın ve teşekkür edin",
          "options": [
            "Buyurun 35 Euro. Çok teşekkürler!",
            "Buyurun 35 Euro. İyi günler!"
          ]
        }
      ]
    },
    "4": {
      "title": "Sabah Rutini ve Randevular",
      "turns": [
        {
          "text": "Merhaba! Genelde saat kaçta kalkarsın?"
        },
        {
          "prompt": "Genelde sabah 7'de kalktığınızı ve 7:30'da kahvaltı yaptığınızı söyleyin",
          "options": [
            "Saat yedide kalkıyorum ve yedi buçukta kahvaltı yapıyorum.",
            "Genelde saat 7'de kalkarım, sonra kahvaltı yaparım."
          ]
        },
        {
          "text": "Almanca kursun saat kaçta başlıyor?"
        },
        {
          "prompt": "Dersin tam dokuzda başladığını ve bir buçukta bittiğini söyleyin",
          "options": [
            "Kurs saat dokuzda başlıyor ve bir buçukta bitiyor.",
            "Saat 9'da başlıyor ve 13:30'a kadar sürüyor."
          ]
        },
        {
          "text": "Oh, bu uzun bir kurs! Cuma akşamı vaktin var mı? Sinemaya gidelim mi?"
        },
        {
          "prompt": "Başka bir randevunuz olduğu için gelemeyeceğinizi söyleyip özür dileyin ve Cumartesi gününü sorun",
          "options": [
            "Üzgünüm, Cuma günü vaktim yok. Cumartesi olur mu?",
            "Maalesef Cuma günü bir randevum var. Cumartesi nasıl?"
          ]
        },
        {
          "text": "Evet, Cumartesi saat 18:00 çok uygun! Cumartesi görüşürüz!"
        },
        {
          "prompt": "Randevuyu onaylayın ve veda edin",
          "options": [
            "Harika! Cumartesi saat 18:00'de görüşürüz. Hoşça kal!",
            "Anlaştık! Cumartesi görüşürüz!"
          ]
        }
      ]
    },
    "5": {
      "title": "Gıda Alışverişi",
      "turns": [
        {
          "text": "İyi günler! Sizin için ne yapabilirim?"
        },
        {
          "prompt": "Domates ve peynir almak istediğinizi söyleyin ve taze olup olmadıklarını sorun",
          "options": [
            "İyi günler! Domates ve peynire ihtiyacım var. Taze mi?",
            "Merhaba! Domates ve peynir satın almak istiyorum."
          ]
        },
        {
          "text": "Evet, her şey çok taze! Ne kadar domates istersiniz?"
        },
        {
          "prompt": "Bir kilogram domates isteyin",
          "options": [
            "Bir kilo domates rica ediyorum, lütfen.",
            "Bir kilo domates lütfen."
          ]
        },
        {
          "text": "Elbette. Ne kadar peynir istersiniz?"
        },
        {
          "prompt": "300 gram İsviçre peyniri isteyin",
          "options": [
            "Bana lütfen 300 gram peynir verin.",
            "Üç yüz gram peynire ihtiyacım var, lütfen."
          ]
        },
        {
          "text": "Buyurun. Başka bir şey?"
        },
        {
          "prompt": "Başka bir şey istemediğinizi belirtin ve toplam tutarı sorun",
          "options": [
            "Hayır, teşekkürler. Hepsi bu. Fiyatı ne kadar?",
            "Hepsi bu kadar, teşekkürler. Toplam ne kadar tutuyor?"
          ]
        },
        {
          "text": "Toplam 9 Euro 40 Cent yapıyor, lütfen."
        },
        {
          "prompt": "10 Euro verin ve üstünün kalmasını söyleyin",
          "options": [
            "Buyurun 10 Euro. Üstü kalsın!",
            "Buyurun. On Euro. Üstü kalsın."
          ]
        }
      ]
    },
    "6": {
      "title": "Aile Hakkında Konuşmak",
      "turns": [
        {
          "text": "Merhaba! Yalnız mı yaşıyorsun yoksa ailenle mi?"
        },
        {
          "prompt": "Evli olduğunuzu, aileniz ve çocuklarınızla birlikte yaşadığınızı söyleyin",
          "options": [
            "Evliyim ve ailemle yaşıyorum.",
            "Eşim ve iki çocuğumla birlikte yaşıyorum."
          ]
        },
        {
          "text": "Ah, ne güzel! Çocukların kaç yaşında?"
        },
        {
          "prompt": "Kızınızın 8, oğlunuzun ise 5 yaşında olduğunu söyleyin",
          "options": [
            "Kızım sekiz, oğlum beş yaşında.",
            "Kızım 8 yaşında, oğlum ise 5."
          ]
        },
        {
          "text": "Peki ya anne baban? Onlar da Almanya'da mı yaşıyor?"
        },
        {
          "prompt": "Kendi ülkenizde yaşadıklarını ama onlarla sık sık telefonda konuştuğunuzu söyleyin",
          "options": [
            "Hayır, anne babam memleketimde yaşıyor. Ama sık sık telefonda konuşuyoruz.",
            "Mısır/Suriye'de yaşıyorlar. Onlarla her gün telefonlaşıyorum."
          ]
        },
        {
          "text": "Bu çok güzel! Yarın kız kardeşimin doğum günü. Kutlayacağız!"
        },
        {
          "prompt": "Kız kardeşinin doğum gününü kutlayın ve iyi dileklerde bulunun",
          "options": [
            "Kız kardeşinin doğum günü kutlu olsun!",
            "Onun için en iyi dileklerimle!"
          ]
        }
      ]
    },
    "7": {
      "title": "Daire Kiralamak",
      "turns": [
        {
          "text": "İyi günler! 3 odalı daire için mi arıyorsunuz?"
        },
        {
          "prompt": "Aramayı onaylayın ve dairenin toplam metrekare boyutunu sorun",
          "options": [
            "Evet, aynen öyle. Daire aslında ne kadar büyüklükte?",
            "İyi günler! Evet, daire ile ilgileniyorum. Kaç metrekare?"
          ]
        },
        {
          "text": "Daire 85 metrekare büyüklüğünde ve ayrıca bir balkonu var."
        },
        {
          "prompt": "Soğuk kirayı ve ek giderler ile elektrik maliyetini sorun",
          "options": [
            "Soğuk kira ne kadar? Ek giderler ne kadar tutuyor?",
            "Sıcak kira ne kadar?"
          ]
        },
        {
          "text": "Soğuk kira 750 Euro. Ek giderler ise 180 Euro."
        },
        {
          "prompt": "Dairenin kaçıncı katta olduğunu ve binada asansör olup olmadığını sorun",
          "options": [
            "Daire kaçıncı katta? Asansör var mı?",
            "Daire giriş katında mı yoksa birinci katta mı?"
          ]
        },
        {
          "text": "Daire üçüncü katta yer alıyor. Ancak maalesef asansör yok."
        },
        {
          "prompt": "Dairenin sizin için uygun olduğunu söyleyin ve yakında görmenin mümkün olup olmadığını sorun",
          "options": [
            "Bu benim için uygun. Daireyi görebilir miyim?",
            "Gözden geçirme ne zaman mümkün olur? Görmek isterim."
          ]
        }
      ]
    },
    "8": {
      "title": "Doktorda",
      "turns": [
        {
          "text": "İyi günler! Neyiniz var?"
        },
        {
          "prompt": "Doktora kendinizi kötü hissettiğinizi, şiddetli baş ağrınız ve ateşiniz olduğunu açıklayın",
          "options": [
            "İyi günler, doktor bey. Kendimi çok kötü hissediyorum. Baş ağrım ve ateşim var.",
            "Hastayım. Başım ağrıyor ve ateşim var."
          ]
        },
        {
          "text": "Anlıyorum. Boğaz ağrınız veya öksürüğünüz de var mı?"
        },
        {
          "prompt": "Evet deyin, boğazınız da ağrıyor ve iyi uyuyamıyorsunuz",
          "options": [
            "Evet, boğazım da ağrıyor ve uyuyamıyorum.",
            "Evet, dünden beri boğaz ağrım var."
          ]
        },
        {
          "text": "Şiddetli bir soğuk algınlığınız var. Size ilaç yazacağım."
        },
        {
          "prompt": "Doktora bu ilacı günde kaç kez almanız gerektiğini sorun",
          "options": [
            "İlacı günde kaç kez almam gerekiyor?",
            "İlacı ne zaman almalıyım?"
          ]
        },
        {
          "text": "Günde iki kez, sabah ve akşam yemekten sonra. Geçmiş olsun!"
        },
        {
          "prompt": "Teşekkür edin ve kibarca veda edin",
          "options": [
            "Çok teşekkürler, doktor bey. Görüşmek üzere!",
            "Yardımınız için çok teşekkür ederim. Hoşça kal!"
          ]
        }
      ]
    },
    "9": {
      "title": "Yol Tarifi İsteme",
      "turns": [
        {
          "text": "Affedersiniz! Tren istasyonuna nasıl gidebilirim?"
        },
        {
          "prompt": "Yolcuya düz gitmesini ve ardından sola dönmesini söyleyin",
          "options": [
            "Düz gidin ve ardından bir sonraki sokaktan sola dönün.",
            "Önce düz gidin, sonra sola dönün."
          ]
        },
        {
          "text": "İstasyon buradan uzak mı?"
        },
        {
          "prompt": "Uzak olmadığını, yürüyerek sadece beş dakika olduğunu söyleyin",
          "options": [
            "Hayır, oldukça yakın. Yürüyerek sadece beş dakika.",
            "Uzak değil, yaklaşık 500 metre."
          ]
        },
        {
          "text": "Otobüse de binebilir miyim?"
        },
        {
          "prompt": "Evet deyin, 100 numaralı otobüs hattı doğrudan oraya gidiyor",
          "options": [
            "Evet, 100 numaralı otobüs hattı doğrudan oraya gidiyor.",
            "Evet, 100 numaralı otobüse binin."
          ]
        },
        {
          "text": "Harika! Yardımlarınız için çok teşekkürler!"
        },
        {
          "prompt": "Rica ederim deyin ve iyi yolculuklar dileyin",
          "options": [
            "Rica ederim! İyi yolculuklar!",
            "Rica ederim! İyi günler!"
          ]
        }
      ]
    },
    "10": {
      "title": "Boş Zaman Planı Yapma",
      "turns": [
        {
          "text": "Merhaba! Boş zamanlarında en çok ne yapmayı seversin?"
        },
        {
          "prompt": "Futbol oynamayı ve müzik dinlemeyi çok sevdiğinizi söyleyin",
          "options": [
            "Futbol oynamayı ve müzik dinlemeyi çok severim.",
            "Boş zamanlarımda futbol oynarım veya kitap okurum."
          ]
        },
        {
          "text": "Futbol harika! Cumartesi günü oynuyoruz. Bize katılmak ister misin?"
        },
        {
          "prompt": "Fikri beğendiğinizi söyleyin ve saat kaçta oynamaya başlayacağınızı sorun",
          "options": [
            "Evet, çok isterim! Saat kaçta buluşuyorsunuz?",
            "Bu çok eğlenceli! Cumartesi günü ne zaman oynuyorsunuz?"
          ]
        },
        {
          "text": "Cumartesi günü saat 15:00'te parkta oynuyoruz. Sadece spor ayakkabılarını getir."
        },
        {
          "prompt": "Belirtilen saatte geleceğinizi onaylayın ve kesinlikle geleceğinizi söyleyin",
          "options": [
            "Tamamdır! Cumartesi saat 15:00'te geliyorum. Görüşmek üzere!",
            "Harika, Cumartesi saat üçte orada olurum."
          ]
        }
      ]
    },
    "11": {
      "title": "Meslekler Hakkında Konuşmak",
      "turns": [
        {
          "text": "Merhaba! Mesleğiniz nedir?"
        },
        {
          "prompt": "Mesleğinizi (örn. bilgisayar mühendisi) ve çalıştığınız şirketi belirtin",
          "options": [
            "Mesleğim mühendislik ve bir bilgisayar şirketinde çalışıyorum.",
            "Bir süpermarkette tezgahtar olarak çalışıyorum."
          ]
        },
        {
          "text": "Bu ilginç! Haftada kaç saat çalışıyorsunuz?"
        },
        {
          "prompt": "Haftada 40 saat çalıştığınızı, işin eğlenceli ama yorucu olduğunu belirtin",
          "options": [
            "Haftada 40 saat çalışıyorum. İş keyifli ama stresli.",
            "Kırk saat çalışıyorum. Mesleğimi çok seviyorum."
          ]
        },
        {
          "text": "Anlıyorum. Peki hayalinizdeki iş nedir?"
        },
        {
          "prompt": "Hayalinizdeki işin yönetici veya yazılım tasarımcısı olmak ve çok para kazanmak olduğunu söyleyin",
          "options": [
            "Hayalimdeki meslek yazılım geliştiricisi olmak. Esnek çalışmak istiyorum.",
            "Başarılı bir aşçı olmak ve kendi restoranımı açmak isterim."
          ]
        }
      ]
    },
    "12": {
      "title": "Restoranda",
      "turns": [
        {
          "text": "İyi akşamlar! Masa rezerve etmiş miydiniz?"
        },
        {
          "prompt": "Evet deyin, 'Ahmad' adına iki kişilik masa ayırttığınızı belirtin",
          "options": [
            "İyi akşamlar! Evet, Ahmad adına iki kişilik bir masa rezerve etmiştik.",
            "Evet, iki kişilik bir masa. İsim Ahmad."
          ]
        },
        {
          "text": "Elbette Bay Ahmad. Buyurun masanız. Ne içmek istersiniz?"
        },
        {
          "prompt": "Bir şişe maden suyu ve elma suyu isteyin",
          "options": [
            "Bir şişe maden suyu ve elma suyu rica ediyorum, lütfen.",
            "Lütfen bana bir su ve bir meyve suyu getirin."
          ]
        },
        {
          "text": "Memnuniyetle. Peki ne yemek istersiniz?"
        },
        {
          "prompt": "Başlangıç olarak domates çorbası, ana yemek olarak şinitzel sipariş edin",
          "options": [
            "Başlangıç olarak domates çorbası ve ana yemek olarak şinitzel.",
            "Bir çorba ve bir şinitzel alıyorum, lütfen."
          ]
        },
        {
          "text": "Hemen geliyor. (Sonra...) Yemek lezzetli miydi? Ödemek ister misiniz?"
        },
        {
          "prompt": "Yemeği övün ve hesabı isteyin",
          "options": [
            "Evet, yemek harikaydı! Hesap lütfen!",
            "Çok lezzetliydi. Hesap lütfen."
          ]
        },
        {
          "text": "Toplam 27 Euro 80 Cent yapıyor."
        },
        {
          "prompt": "Ona 30 Euro verin ve üstünün kalmasını söyleyin (bahşiş)",
          "options": [
            "Buyurun 30 Euro. Üstü kalsın!",
            "Üstü kalsın. 30 Euro yapın."
          ]
        }
      ]
    }
  },
  "ro": {
    "1": {
      "title": "Introducere de sine",
      "turns": [
        {
          "text": "Buna ziua! Eu sunt Anna. Cum te numești?"
        },
        {
          "prompt": "Prezintă-te și spune-i partenerului numele tău",
          "options": [
            "Salut Anna! Numele meu este Ahmad.",
            "Bună ziua! Numele meu este Ahmad."
          ]
        },
        {
          "text": "Încântat să te cunosc, Ahmad! De unde eşti?"
        },
        {
          "prompt": "Spuneți partenerului țara dvs. de origine",
          "options": [
            "Vin din Siria.",
            "Vin din Egipt."
          ]
        },
        {
          "text": "Ah, frumos! Și unde locuiești acum?"
        },
        {
          "prompt": "Spune-i partenerului orașul tău actual",
          "options": [
            "Locuiesc la Berlin acum.",
            "Locuiesc în Munchen acum."
          ]
        },
        {
          "text": "Berlinul este grozav! Ce limbi vorbiți?"
        },
        {
          "prompt": "Menționați limbile pe care le vorbiți",
          "options": [
            "Vorbesc arabă și puțin germană.",
            "Limba mea maternă este arabă. Acum invat germana."
          ]
        },
        {
          "text": "Foarte bun! La revedere, Ahmad!"
        },
        {
          "prompt": "Spune-i la revedere partenerului într-un mod adecvat",
          "options": [
            "La revedere, Anna! Pa!",
            "Pa! Pe curând!"
          ]
        }
      ]
    },
    "2": {
      "title": "Întâlnire într-o cafenea",
      "turns": [
        {
          "text": "Buna ziua! Cum te simţi azi?"
        },
        {
          "prompt": "Răspundeți că vă descurcați bine și întreabă-l cum se descurcă partenerul",
          "options": [
            "Buna ziua! Mă descurc foarte bine, mulțumesc. Și tu?",
            "Multumesc, bine! Si ce mai faci?"
          ]
        },
        {
          "text": "Si eu ma descurc bine, multumesc. Ți-ar plăcea să bei cafea sau ceai?"
        },
        {
          "prompt": "Comandă o ceașcă de cafea cu lapte, te rog",
          "options": [
            "As dori o cafea cu lapte, va rog.",
            "O cafea cu lapte pentru mine, te rog."
          ]
        },
        {
          "text": "Sigur! Voi lua un ceai. Care este numărul tău de mobil mai târziu?"
        },
        {
          "prompt": "Dați numărul de telefon partenerului (0176...)",
          "options": [
            "Numărul meu este zero-unu-șapte-șase-doi-trei-patru.",
            "Iată numărul meu: zero-unu-șapte-șase-cinci-șase-șapte."
          ]
        },
        {
          "text": "Mulțumesc, am notat-o! Ne vedem data viitoare!"
        },
        {
          "prompt": "Spune-i la revedere prietenului tău și urează-i o zi bună",
          "options": [
            "Pa! O zi plăcută!",
            "La revedere! Pe curând!"
          ]
        }
      ]
    },
    "3": {
      "title": "La Târgul de vechituri",
      "turns": [
        {
          "text": "Bună ziua! Cauți ceva anume?"
        },
        {
          "prompt": "Spuneți că căutați o cameră sau o carte și întrebați despre preț",
          "options": [
            "Bună ziua! Caut o carte. Cât costă această carte?",
            "Buna ziua! Cât costă această cameră aici?"
          ]
        },
        {
          "text": "Cartea costă 5 euro. Camera costa 45 de euro. E ieftin!"
        },
        {
          "prompt": "Spuneți că prețul este prea mare (scump) și încercați să negociați un preț mai mic",
          "options": [
            "Cartea este ieftină. Voi lua cartea.",
            "Oh, 45 de euro e prea scump! E ok 35 de euro?"
          ]
        },
        {
          "text": "Ei bine, 35 de euro pentru cameră este bine. O vei lua?"
        },
        {
          "prompt": "De acord, spuneți că o veți lua și întrebați unde să plătiți",
          "options": [
            "Da, o voi lua. Mulțumesc foarte mult!",
            "Super, iau camera cu 35 de euro."
          ]
        },
        {
          "text": "Poftim. Asta face 35 de euro."
        },
        {
          "prompt": "Plătește vânzătorul și mulțumește-i",
          "options": [
            "Aici sunt 35 de euro. Mulțumesc foarte mult!",
            "Poftim, 35 de euro. O zi plăcută!"
          ]
        }
      ]
    },
    "4": {
      "title": "Mornens și Numiri",
      "turns": [
        {
          "text": "Buna ziua! Când te trezești de obicei?"
        },
        {
          "prompt": "Spune-le că de obicei te trezești la 7:00 și iei micul dejun la 7:30",
          "options": [
            "Mă trezesc la ora șapte și iau micul dejun la șapte și jumătate.",
            "In mod normal ma trezesc la ora 7, apoi iau micul dejun."
          ]
        },
        {
          "text": "Și când începe cursul tău de germană?"
        },
        {
          "prompt": "Spune-le că lecția începe la ora nouă și se termină la unu și jumătate",
          "options": [
            "Cursul începe la ora nouă și se termină la unu și jumătate.",
            "Începe la ora 9 și durează până la 13:30."
          ]
        },
        {
          "text": "Oh, acesta este un curs lung! Ai timp vineri seara? Mergem la cinema?"
        },
        {
          "prompt": "Scuze că nu ai timp din cauza unei alte întâlniri și întreabă de sâmbătă",
          "options": [
            "Îmi pare rău, nu am timp vineri. Sâmbăta funcționează?",
            "Din pacate am o programare vineri. Ce zici de sambata?"
          ]
        },
        {
          "text": "Da, sâmbătă la 18:00 se potrivește bine! Ne vedem sâmbătă!"
        },
        {
          "prompt": "Acceptați întâlnirea și luați-vă la revedere",
          "options": [
            "Mare! Ne vedem sâmbătă la 18:00. Pa!",
            "Afacere! Ne vedem sâmbătă!"
          ]
        }
      ]
    },
    "5": {
      "title": "Cumpărături alimentare",
      "turns": [
        {
          "text": "Bună ziua! Cu ce ​​vă pot ajuta?"
        },
        {
          "prompt": "Spuneți că doriți să cumpărați roșii și brânză și întrebați dacă sunt proaspete",
          "options": [
            "Bună ziua! Am nevoie de roșii și brânză. Sunt proaspete?",
            "Buna ziua! As dori sa cumpar rosii si branza."
          ]
        },
        {
          "text": "Da, totul este foarte proaspăt! Câte roșii ai vrea?"
        },
        {
          "prompt": "Solicitați un kilogram de roșii",
          "options": [
            "Aș dori un kilogram de roșii, vă rog.",
            "Un kilogram de roșii, vă rog."
          ]
        },
        {
          "text": "Sigur. Și câtă brânză ai vrea?"
        },
        {
          "prompt": "Solicitați 300 de grame de brânză elvețiană",
          "options": [
            "Vă rog să-mi dați 300 de grame de brânză.",
            "Am nevoie de trei sute de grame de brânză, te rog."
          ]
        },
        {
          "text": "Poftim. Altceva?"
        },
        {
          "prompt": "Răspunde negativ și cere costul total",
          "options": [
            "Nu, mulțumesc. Asta este tot. Cât costă?",
            "Asta e tot, mulțumesc. Cât face?"
          ]
        },
        {
          "text": "Asta înseamnă 9 euro 40 în total, te rog."
        },
        {
          "prompt": "Dă-le o bancnotă de 10 euro și spune-le să păstreze schimbul",
          "options": [
            "Aici sunt 10 euro. Păstrați restul!",
            "Poftim. Zece euro. Păstrați restul."
          ]
        }
      ]
    },
    "6": {
      "title": "Vorbind despre familie",
      "turns": [
        {
          "text": "Buna ziua! Locuiești singur sau cu familia ta?"
        },
        {
          "prompt": "Spune că ești căsătorit și trăiești cu familia și copiii tăi",
          "options": [
            "Sunt căsătorit și locuiesc cu familia mea.",
            "Locuiesc împreună cu soția și cei doi copii ai mei."
          ]
        },
        {
          "text": "Ah, ce frumos! Câți ani au copiii tăi?"
        },
        {
          "prompt": "Spune-le că fiica ta are 8 ani și fiul tău are 5 ani",
          "options": [
            "Fiica mea are opt ani, iar fiul meu are cinci ani.",
            "Fiica are 8 ani, iar fiul 5."
          ]
        },
        {
          "text": "Și părinții tăi? Locuiesc și aici, în Germania?"
        },
        {
          "prompt": "Spune-le că locuiesc în țara ta de origine, dar vorbești des la telefon cu ei",
          "options": [
            "Nu, părinții mei locuiesc în țara mea natală. Dar vorbim des la telefon.",
            "Ei trăiesc în Egipt/Siria. Vorbesc la telefon cu ei în fiecare zi."
          ]
        },
        {
          "text": "Asta e bine! Mâine este ziua surorii mele. Sarbatorim!"
        },
        {
          "prompt": "O felicită pe sora lui și îi urează la mulți ani",
          "options": [
            "La multi ani surorii tale!",
            "Toate cele bune de ziua ei!"
          ]
        }
      ]
    },
    "7": {
      "title": "Închirierea unui apartament",
      "turns": [
        {
          "text": "Bună ziua! Sunati pentru apartamentul cu 3 camere?"
        },
        {
          "prompt": "Confirmați apelul și întrebați despre totalul de metri pătrați ai apartamentului",
          "options": [
            "Da, exact. Cât de mare este de fapt apartamentul?",
            "Bună ziua! Da, ma intereseaza apartamentul. Cati metri patrati are?"
          ]
        },
        {
          "text": "Apartamentul are 85 mp si are si balcon."
        },
        {
          "prompt": "Întrebați despre chiria rece și costul utilităților și al energiei electrice",
          "options": [
            "Cât de mare este chiria la rece? Si cat sunt utilitatile?",
            "Cât costă chiria caldă?"
          ]
        },
        {
          "text": "Chiria la rece este de 750 de euro. Utilitatile sunt 180 euro."
        },
        {
          "prompt": "Întrebați la ce etaj se află apartamentul și dacă clădirea are lift",
          "options": [
            "La ce etaj este apartamentul? Există lift?",
            "Apartamentul este la parter sau la primul etaj?"
          ]
        },
        {
          "text": "Apartamentul este la etajul trei. Dar, din păcate, nu există lift."
        },
        {
          "prompt": "Spuneți că găsiți apartamentul potrivit și întrebați dacă îl vizionați în curând",
          "options": [
            "E în regulă pentru mine. Pot vedea apartamentul?",
            "Când este posibilă o vizionare? Aș vrea să-l văd."
          ]
        }
      ]
    },
    "8": {
      "title": "La Doctor",
      "turns": [
        {
          "text": "Bună ziua! Ce este în neregulă cu tine?"
        },
        {
          "prompt": "Explicați medicului că vă simțiți rău, aveți o durere de cap severă și febră",
          "options": [
            "Bună ziua, doctore. ma simt foarte rau. Am o durere de cap și o febră.",
            "Sunt bolnav. Mă doare capul și am febră."
          ]
        },
        {
          "text": "Înțeleg. Aveți și dureri în gât sau tuse?"
        },
        {
          "prompt": "Raspunde ca da, te doare si gatul si nu poti dormi bine",
          "options": [
            "Da, mă doare și gâtul și nu pot să dorm.",
            "Da, mă doare gâtul de ieri."
          ]
        },
        {
          "text": "Ai o răceală urâtă. Îți voi prescrie medicamente."
        },
        {
          "prompt": "Întrebați medicul de câte ori pe zi trebuie să luați acest medicament",
          "options": [
            "De câte ori pe zi trebuie să iau medicamentul?",
            "Când ar trebui să iau medicamentul?"
          ]
        },
        {
          "text": "De două ori pe zi, dimineața și seara, după masă. Fă-te bine cât mai curând!"
        },
        {
          "prompt": "Mulțumește-i și spune-i la revedere politicos",
          "options": [
            "Mulțumesc mult, doctore. La revedere!",
            "Vă mulțumesc foarte mult pentru ajutor. Pa!"
          ]
        }
      ]
    },
    "9": {
      "title": "Cererea de indicații",
      "turns": [
        {
          "text": "Scuzați-mă! Cum ajung la stația de tren?"
        },
        {
          "prompt": "Spune-i călătorul să meargă drept înainte și apoi să vireze la stânga",
          "options": [
            "Mergeți drept înainte și apoi luați următoarea stradă la stânga.",
            "Mai întâi mergeți drept înainte, apoi faceți stânga."
          ]
        },
        {
          "text": "Gara este departe de aici?"
        },
        {
          "prompt": "Spune-i că nu e departe, doar o plimbare de cinci minute",
          "options": [
            "Nu, este foarte aproape. Doar cinci minute de mers pe jos.",
            "Nu e departe, vreo 500 de metri."
          ]
        },
        {
          "text": "Pot să iau și autobuzul?"
        },
        {
          "prompt": "Spune-i că da, autobuzul numărul 100 merge direct acolo",
          "options": [
            "Da, linia de autobuz 100 merge direct acolo.",
            "Da, luați autobuzul numărul 100."
          ]
        },
        {
          "text": "Mare! Vă mulțumesc foarte mult pentru ajutor!"
        },
        {
          "prompt": "Răspundeți cu „Bine ați venit” și urați-i o călătorie bună",
          "options": [
            "Cu plăcere! O călătorie bună!",
            "Cu plăcere! O zi plăcută!"
          ]
        }
      ]
    },
    "10": {
      "title": "Efectuarea de planuri de timp liber",
      "turns": [
        {
          "text": "Buna ziua! Ce iti place sa faci cel mai mult in timpul liber?"
        },
        {
          "prompt": "Spune-i că-ți place să joci fotbal și să asculți muzică",
          "options": [
            "Îmi place foarte mult să joc fotbal și să ascult muzică.",
            "În timpul liber joc fotbal sau citesc o carte."
          ]
        },
        {
          "text": "Fotbalul este grozav! Jucăm sâmbătă. Vrei să vii?"
        },
        {
          "prompt": "Exprimă-ți interesul și întreabă la ce oră vei începe să joci",
          "options": [
            "Da, cu plăcere! La ce oră vă întâlniți?",
            "Sună distractiv! Când joci sâmbătă?"
          ]
        },
        {
          "text": "Ne jucăm sâmbătă la ora 15, în parc. Aduceți doar pantofi sport."
        },
        {
          "prompt": "Confirmați-vă prezența la ora programată și spuneți că veți veni cu siguranță",
          "options": [
            "Bine! Vin sambata la 15:00. Ne vedem atunci!",
            "Super, voi fi acolo sâmbătă la ora trei."
          ]
        }
      ]
    },
    "11": {
      "title": "Vorbind despre locuri de muncă",
      "turns": [
        {
          "text": "Buna ziua! Care este profesia ta?"
        },
        {
          "prompt": "Spune-i profesia ta (de exemplu, inginer informatic) și compania la care lucrezi",
          "options": [
            "Sunt inginer de profesie și lucrez la o companie de calculatoare.",
            "Lucrez ca vânzător într-un supermarket."
          ]
        },
        {
          "text": "E interesant! Câte ore lucrezi pe săptămână?"
        },
        {
          "prompt": "Să presupunem că lucrezi 40 de ore pe săptămână și că munca ta este distractivă, dar obositoare",
          "options": [
            "Lucrez 40 de ore pe săptămână. Munca este distractivă, dar este stresantă.",
            "Lucrez patruzeci de ore. Îmi place foarte mult meseria mea."
          ]
        },
        {
          "text": "Înțeleg. Și care este jobul tău de vis?"
        },
        {
          "prompt": "Spune că jobul tău de vis este să lucrezi ca manager sau dezvoltator de software și să câștigi mulți bani",
          "options": [
            "Jobul meu de vis este dezvoltator de software. Aș dori să lucrez flexibil.",
            "Mi-ar plăcea să fiu un bucătar de succes și să am propriul meu restaurant."
          ]
        }
      ]
    },
    "12": {
      "title": "În Restaurant",
      "turns": [
        {
          "text": "Bună seara! Ai rezervat o masă?"
        },
        {
          "prompt": "Răspundeți da, ați rezervat o masă pentru două persoane sub numele „Ahmad”",
          "options": [
            "Bună seara! Da, am rezervat o masă pentru doi sub numele Ahmad.",
            "Da, o masă pentru doi. Numele este Ahmad."
          ]
        },
        {
          "text": "Cu siguranță, domnule Ahmad. Aici este masa ta. Ce ți-ar place să bei?"
        },
        {
          "prompt": "Comandați o sticlă de apă minerală și un suc de mere",
          "options": [
            "As dori o sticla de apa minerala si un suc de mere, va rog.",
            "Vă rog să-mi aduceți o apă și un suc."
          ]
        },
        {
          "text": "Cu plăcere. Și ce ai vrea să mănânci?"
        },
        {
          "prompt": "Comandă supă de roșii ca aperitiv și șnițel ca fel principal",
          "options": [
            "Ca aperitiv supa de rosii si ca fel principal snitelul.",
            "O să iau o supă și un șnitel, te rog."
          ]
        },
        {
          "text": "Vin imediat. (Mai târziu...) A fost mâncarea delicioasă? Doriți să plătiți?"
        },
        {
          "prompt": "Lăudați mâncarea și cereți nota",
          "options": [
            "Da, mâncarea a fost fantastică! Factura, vă rog!",
            "A fost foarte delicios. Factura, vă rog."
          ]
        },
        {
          "text": "Asta înseamnă 27 de euro 80 de cenți în total."
        },
        {
          "prompt": "Dă-i 30 de euro și spune-i să păstreze schimbul (bacsis)",
          "options": [
            "Aici sunt 30 de euro. Păstrați restul!",
            "Păstrați restul. Fă-o 30 de euro."
          ]
        }
      ]
    }
  },
  "bs": {
    "1": {
      "title": "Self Introduction",
      "turns": [
        {
          "text": "Zdravo! Ja sam Anna. kako se zoveš?"
        },
        {
          "prompt": "Predstavite se i recite partneru svoje ime",
          "options": [
            "Zdravo Anna! Moje ime je Ahmad.",
            "Dobar dan! Moje ime je Ahmad."
          ]
        },
        {
          "text": "Drago mi je, Ahmade! odakle dolaziš?"
        },
        {
          "prompt": "Recite partneru svoju zemlju porijekla",
          "options": [
            "Dolazim iz Sirije.",
            "Dolazim iz Egipta."
          ]
        },
        {
          "text": "Ah, lepo! I gdje sada živiš?"
        },
        {
          "prompt": "Recite partneru vaš trenutni grad",
          "options": [
            "Sada živim u Berlinu.",
            "Sada živim u Minhenu."
          ]
        },
        {
          "text": "Berlin je odličan! Koje jezike govorite?"
        },
        {
          "prompt": "Navedite jezike koje govorite",
          "options": [
            "Govorim arapski i malo njemački.",
            "Moj maternji jezik je arapski. Sada učim njemački."
          ]
        },
        {
          "text": "Vrlo dobro! Zbogom, Ahmade!"
        },
        {
          "prompt": "Recite zbogom partneru na odgovarajući način",
          "options": [
            "Zbogom, Anna! ćao!",
            "ćao! Vidimo se uskoro!"
          ]
        }
      ]
    },
    "2": {
      "title": "Sastanak u kafiću",
      "turns": [
        {
          "text": "Zdravo! kako si danas?"
        },
        {
          "prompt": "Odgovorite da ste dobro i pitajte kako je partner",
          "options": [
            "Zdravo! Dobro mi ide, hvala. A ti?",
            "Hvala, dobro! A kako si ti?"
          ]
        },
        {
          "text": "I ja sam dobro, hvala. Želite li popiti kafu ili čaj?"
        },
        {
          "prompt": "Naručite šolju kafe sa mlekom, molim",
          "options": [
            "Ja bih kafu sa mlekom, molim.",
            "Kafu sa mlekom za mene, molim."
          ]
        },
        {
          "text": "Naravno! Uzeću čaj. Koji je tvoj broj mobilnog za kasnije?"
        },
        {
          "prompt": "Dajte svoj broj telefona partneru (0176...)",
          "options": [
            "Moj broj je nula-jedan-sedam-šest-dva-tri-četiri.",
            "Evo mog broja: nula-jedan-sedam-šest-pet-šest-sedam."
          ]
        },
        {
          "text": "Hvala, zapisao sam! Vidimo se sljedeći put!"
        },
        {
          "prompt": "Pozdravite se sa svojim prijateljem i poželite im dobar dan",
          "options": [
            "ćao! ugodan dan!",
            "Zbogom! Vidimo se uskoro!"
          ]
        }
      ]
    },
    "3": {
      "title": "Na buvljoj pijaci",
      "turns": [
        {
          "text": "Dobar dan! Tražite li nešto konkretno?"
        },
        {
          "prompt": "Recimo da tražite kameru ili knjigu i pitajte za cijenu",
          "options": [
            "Dobar dan! Tražim knjigu. Koliko košta ova knjiga?",
            "Zdravo! Koliko je ova kamera ovdje?"
          ]
        },
        {
          "text": "Knjiga košta 5 evra. Kamera košta 45 eura. To je jeftino!"
        },
        {
          "prompt": "Recite da je cijena previsoka (skupa) i pokušajte dogovoriti nižu cijenu",
          "options": [
            "Knjiga je jeftina. Ja ću uzeti knjigu.",
            "Oh, 45 eura je preskupo! Da li je 35 evra u redu?"
          ]
        },
        {
          "text": "Pa, dobro, 35 eura za kameru je u redu. Hoćeš li ga uzeti?"
        },
        {
          "prompt": "Složi se, reci da ćeš uzeti i pitaj gdje da platiš",
          "options": [
            "Da, uzeću. Hvala vam puno!",
            "Odlično, uzeću kameru za 35 eura."
          ]
        },
        {
          "text": "Izvolite. To je 35 evra."
        },
        {
          "prompt": "Platite prodavcu i zahvalite im se",
          "options": [
            "Evo 35 eura. Hvala vam puno!",
            "Izvolite, 35 eura. ugodan dan!"
          ]
        }
      ]
    },
    "4": {
      "title": "Mornens and Appointings",
      "turns": [
        {
          "text": "Zdravo! Kada obično ustajete?"
        },
        {
          "prompt": "Recite im da se obično budite u 7 ujutro i doručkujete u 7:30",
          "options": [
            "Ustajem u sedam sati i doručkujem u pola osam.",
            "Inače ustajem u 7 sati, pa doručkujem."
          ]
        },
        {
          "text": "A kada počinje vaš kurs njemačkog?"
        },
        {
          "prompt": "Recite im da lekcija počinje u devet sati i završava se u pola jedan",
          "options": [
            "Kurs počinje u devet sati i završava se u pola dva.",
            "Počinje u 9 sati i traje do 13:30."
          ]
        },
        {
          "text": "Oh, to je dug kurs! Imate li vremena u petak uveče? Hoćemo li u bioskop?"
        },
        {
          "prompt": "Izvinite se što nemate vremena zbog drugog termina i pitajte za subotu",
          "options": [
            "Žao mi je, nemam vremena u petak. Radi li subota?",
            "Nažalost, imam termin u petak. Šta kažeš na subotu?"
          ]
        },
        {
          "text": "Da, subota u 18 sati dobro pristaje! Vidimo se u subotu!"
        },
        {
          "prompt": "Dogovorite se na termin i recite zbogom",
          "options": [
            "Odlično! Vidimo se u subotu u 18h. ćao!",
            "Dogovoreno! Vidimo se u subotu!"
          ]
        }
      ]
    },
    "5": {
      "title": "Kupovina namirnica",
      "turns": [
        {
          "text": "Dobar dan! Šta mogu učiniti za vas?"
        },
        {
          "prompt": "Recite da želite kupiti paradajz i sir i pitajte da li su svježi",
          "options": [
            "Dobar dan! Trebaju mi ​​paradajz i sir. Jesu li svježe?",
            "Zdravo! Hteo bih da kupim paradajz i sir."
          ]
        },
        {
          "text": "Da, sve je veoma sveže! Koliko paradajza želite?"
        },
        {
          "prompt": "Zatražite jedan kilogram paradajza",
          "options": [
            "Ja bih jedan kilogram paradajza, molim.",
            "Jedan kilogram paradajza, molim."
          ]
        },
        {
          "text": "Naravno. A koliko sira biste željeli?"
        },
        {
          "prompt": "Zatražite 300 grama švajcarskog sira",
          "options": [
            "Molim te, daj mi 300 grama sira.",
            "Treba mi trista grama sira, molim."
          ]
        },
        {
          "text": "Izvolite. Još nešto?"
        },
        {
          "prompt": "Odgovorite negativno i zatražite ukupni trošak",
          "options": [
            "Ne, hvala. To je sve. Koliko to košta?",
            "To je sve, hvala. Koliko zarađuje?"
          ]
        },
        {
          "text": "To je ukupno 9 eura 40, molim."
        },
        {
          "prompt": "Dajte im novčanicu od 10 eura i recite im da zadrže kusur",
          "options": [
            "Evo 10 eura. Zadrži kusur!",
            "Izvolite. Deset eura. Zadrži kusur."
          ]
        }
      ]
    },
    "6": {
      "title": "Talking About Family",
      "turns": [
        {
          "text": "Zdravo! Da li živite sami ili sa porodicom?"
        },
        {
          "prompt": "Recite da ste oženjeni i živite sa svojom porodicom i djecom",
          "options": [
            "Oženjen sam i živim sa svojom porodicom.",
            "Živim zajedno sa suprugom i dvoje djece."
          ]
        },
        {
          "text": "Ah, kako je lepo! Koliko godina imaju vaša djeca?"
        },
        {
          "prompt": "Recite im da vaša ćerka ima 8 godina, a vaš sin 5 godina",
          "options": [
            "Moja ćerka ima osam, a sin pet godina.",
            "Ćerka ima 8 godina, a sin 5 godina."
          ]
        },
        {
          "text": "A tvoji roditelji? Žive li i oni ovdje u Njemačkoj?"
        },
        {
          "prompt": "Recite im da žive u vašoj zemlji, ali često razgovarate telefonom s njima",
          "options": [
            "Ne, moji roditelji žive u mojoj domovini. Ali često razgovaramo telefonom.",
            "Žive u Egiptu/Siriji. Svaki dan razgovaram telefonom s njima."
          ]
        },
        {
          "text": "To je dobro! Sutra je mojoj sestri rođendan. Slavimo!"
        },
        {
          "prompt": "Čestitajte njegovoj sestri i poželite joj srećan rođendan",
          "options": [
            "Sretan rođendan tvojoj sestri!",
            "Sve najbolje za njen rodjendan!"
          ]
        }
      ]
    },
    "7": {
      "title": "Iznajmljivanje stana",
      "turns": [
        {
          "text": "Dobar dan! Zovete u vezi 3-sobnog stana?"
        },
        {
          "prompt": "Potvrdite poziv i raspitajte se o ukupnim kvadratima stana",
          "options": [
            "Da, tačno. Koliko je zapravo stan velik?",
            "Dobar dan! Da, zainteresovan sam za stan. Koliko je kvadratnih metara?"
          ]
        },
        {
          "text": "Stan je površine 85 kvadratnih metara i također ima balkon."
        },
        {
          "prompt": "Raspitajte se o najamnini za hladnoću i troškovima komunalija i struje",
          "options": [
            "Koliko je visoka renta? A koliko su komunalije?",
            "Koliko je topla renta?"
          ]
        },
        {
          "text": "Hladna renta je 750 eura. Režije su 180 eura."
        },
        {
          "prompt": "Pitajte na kom je spratu stan i da li zgrada ima lift",
          "options": [
            "Na kom spratu se nalazi stan? Ima li lift?",
            "Da li je stan u prizemlju ili na prvom spratu?"
          ]
        },
        {
          "text": "Stan se nalazi na trećem spratu. Ali nažalost, lifta nema."
        },
        {
          "prompt": "Recite da smatrate da je stan prikladan i pitajte da li ga uskoro pogledate",
          "options": [
            "To je u redu za mene. Mogu li pogledati stan?",
            "Kada je moguće razgledanje? Voleo bih to da vidim."
          ]
        }
      ]
    },
    "8": {
      "title": "Kod doktora",
      "turns": [
        {
          "text": "Dobar dan! šta nije u redu s tobom?"
        },
        {
          "prompt": "Objasnite lekaru da se osećate mučno, da imate jaku glavobolju i temperaturu",
          "options": [
            "Dobar dan, doktore. Osećam se veoma loše. Imam glavobolju i temperaturu.",
            "Ja sam bolestan. Boli me glava i imam temperaturu."
          ]
        },
        {
          "text": "Vidim. Imate li i grlobolju ili kašalj?"
        },
        {
          "prompt": "Odgovorite da, boli vas i grlo i ne možete dobro spavati",
          "options": [
            "Da, i mene boli grlo i ne mogu da spavam.",
            "Da, od juče me boli grlo."
          ]
        },
        {
          "text": "Imaš jaku prehladu. Prepisaću ti lekove."
        },
        {
          "prompt": "Pitajte ljekara koliko puta dnevno trebate uzimati ovaj lijek",
          "options": [
            "Koliko puta dnevno treba da uzimam lek?",
            "Kada treba da uzmem lek?"
          ]
        },
        {
          "text": "Dva puta dnevno, ujutro i uveče nakon jela. Ozdravi uskoro!"
        },
        {
          "prompt": "Zahvalite mu se i ljubazno se pozdravite",
          "options": [
            "Hvala vam puno doktore. Zbogom!",
            "Hvala vam puno na pomoći. ćao!"
          ]
        }
      ]
    },
    "9": {
      "title": "Pitam za upute",
      "turns": [
        {
          "text": "Izvinite me! Kako da dođem do željezničke stanice?"
        },
        {
          "prompt": "Recite putniku da ide pravo, a zatim skrene lijevo",
          "options": [
            "Idite pravo i onda skrenite sljedećom ulicom lijevo.",
            "Prvo idite pravo, a zatim skrenite lijevo."
          ]
        },
        {
          "text": "Je li željeznička stanica daleko odavde?"
        },
        {
          "prompt": "Reci mu da nije daleko, samo pet minuta hoda",
          "options": [
            "Ne, vrlo je blizu. Samo pet minuta hoda.",
            "Nije daleko, oko 500 metara."
          ]
        },
        {
          "text": "Mogu li i ja ići autobusom?"
        },
        {
          "prompt": "Reci mu da, autobus broj 100 ide direktno tamo",
          "options": [
            "Da, autobuska linija 100 ide direktno tamo.",
            "Da, idite autobusom broj 100."
          ]
        },
        {
          "text": "Odlično! Hvala vam puno na pomoći!"
        },
        {
          "prompt": "Odgovorite sa 'Nema na čemu' i poželite mu sretan put",
          "options": [
            "Nema na čemu! Sretan put!",
            "Nema na čemu! ugodan dan!"
          ]
        }
      ]
    },
    "10": {
      "title": "Pravljenje planova slobodnog vremena",
      "turns": [
        {
          "text": "Zdravo! Šta najviše voliš da radiš u slobodno vrijeme?"
        },
        {
          "prompt": "Recite mu da volite da igrate fudbal i slušate muziku",
          "options": [
            "Jako volim da igram fudbal i slušam muziku.",
            "U slobodno vrijeme igram fudbal ili čitam knjigu."
          ]
        },
        {
          "text": "Fudbal je odličan! Igramo u subotu. Želiš li s nama?"
        },
        {
          "prompt": "Izrazite interesovanje i pitajte u koje vreme ćete početi da igrate",
          "options": [
            "Da, rado! Kada se sastajete?",
            "To zvuči zabavno! Kada igrate u subotu?"
          ]
        },
        {
          "text": "Igramo u subotu u 15h u parku. Samo ponesite sportsku obuću."
        },
        {
          "prompt": "Potvrdite svoje prisustvo u zakazano vrijeme i recite da ćete sigurno doći",
          "options": [
            "U redu! Dolazim u subotu u 15h. Vidimo se onda!",
            "Odlično, biću tamo u subotu u tri sata."
          ]
        }
      ]
    },
    "11": {
      "title": "Pričamo o poslovima",
      "turns": [
        {
          "text": "Zdravo! Koja je tvoja profesija?"
        },
        {
          "prompt": "Recite mu svoju profesiju (npr. kompjuterski inženjer) i kompaniju u kojoj radite",
          "options": [
            "Po struci sam inženjer i radim u kompjuterskoj kompaniji.",
            "Radim kao prodavac u supermarketu."
          ]
        },
        {
          "text": "To je zanimljivo! Koliko sati sedmično radite?"
        },
        {
          "prompt": "Recimo da radite 40 sati sedmično i da vam je posao zabavan, ali naporan",
          "options": [
            "Radim 40 sati sedmično. Posao je zabavan, ali je stresan.",
            "Radim četrdeset sati. Jako volim svoj posao."
          ]
        },
        {
          "text": "Vidim. A koji je tvoj posao iz snova?"
        },
        {
          "prompt": "Recimo da je vaš posao iz snova raditi kao menadžer ili programer softvera i zaraditi mnogo novca",
          "options": [
            "Moj posao iz snova je programer softvera. Voleo bih da radim fleksibilno.",
            "Voleo bih da budem uspešan kuvar i da imam svoj restoran."
          ]
        }
      ]
    },
    "12": {
      "title": "U restoranu",
      "turns": [
        {
          "text": "Dobro veče! Jeste li rezervisali sto?"
        },
        {
          "prompt": "Odgovori da, rezervisao si sto za dvoje pod imenom 'Ahmad'",
          "options": [
            "Dobro veče! Da, rezervisali smo sto za dvoje pod imenom Ahmad.",
            "Da, sto za dvoje. Zovem se Ahmad."
          ]
        },
        {
          "text": "Svakako, gospodine Ahmad. Evo vašeg stola. Šta biste voljeli popiti?"
        },
        {
          "prompt": "Naručite flašu mineralne vode i sok od jabuke",
          "options": [
            "Želim flašu mineralne vode i sok od jabuke, molim.",
            "Molim te, donesi mi vodu i sok."
          ]
        },
        {
          "text": "Sa zadovoljstvom. A šta biste željeli jesti?"
        },
        {
          "prompt": "Naručite supu od paradajza kao predjelo i šnicle kao glavno jelo",
          "options": [
            "Kao predjelo supa od paradajza i kao glavno jelo šnicle.",
            "Uzeću supu i šnicle, molim."
          ]
        },
        {
          "text": "Stiže pravo gore. (Kasnije...) Da li je hrana bila ukusna? Želite li platiti?"
        },
        {
          "prompt": "Pohvalite hranu i tražite račun",
          "options": [
            "Da, hrana je bila fantastična! Račun, molim!",
            "Bilo je veoma ukusno. Račun, molim."
          ]
        },
        {
          "text": "To ukupno čini 27 eura 80 centi."
        },
        {
          "prompt": "Dajte mu 30 eura i recite mu da zadrži kusur (napojnica)",
          "options": [
            "Evo 30 eura. Zadrži kusur!",
            "Zadrži kusur. Neka bude 30 eura."
          ]
        }
      ]
    }
  }
};
