"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export default function TsukemenLP() {
  const [currentReviews, setCurrentReviews] = useState<any[]>([])

  const reviews = [
    {
      source: "楽天",
      comment:
        "ドロドロさに驚きました！手順通りだと、スープをひと煮立ちさせるので、少し手間はかかります。そして記載通りの水分を入れました。結果は、スープがとてもドロドロ！麺を入れてもメンが沈まずに浮いている！味は魚粉の感じが強すぎて、豚骨の感じはあまりしませんでした。もう１種類の煮干しのだと、どうなんだろう…、と思いました！麺の量も一般的には適度かもしれませんが、普段、ご飯のおかわりをする自分にとっては、1.5倍くらいほしいかなぁと。あと、最後にスープ割りができると最高だなと思いました。それでも十分に満足いったので、できたら購入したいと思います。",
      rating: 5,
      name: "お客様",
    },
    {
      source: "楽天",
      comment:
        "この値段で、このクオリティは感動モノです。このつけ麺なら、ワザワザお店に行かなくても十分満足です。私はこの店の訳ありチャーシューも購入しているのですが、セットで食べるとお店気分です。というより、このつけ麺とチャーシューでお店開けるのではないかと思います。",
      rating: 5,
      name: "お客様",
    },
    {
      source: "楽天",
      comment: "お店のつけ麺より美味しいと思います。リピート確定です。",
      rating: 5,
      name: "お客様",
    },
    {
      source: "楽天",
      comment: "リピートです。最近はこればかり購入しています。",
      rating: 5,
      name: "お客様",
    },
    {
      source: "楽天",
      comment: "相変わらず、うまいラーメンです。リピートです。",
      rating: 5,
      name: "お客様",
    },
    {
      source: "楽天",
      comment:
        "スープの封を開けると魚介の濃厚な香りが強くした。説明書通り170ccで希釈したが油分も多くこんなに濃厚で大丈夫かと思った。でも少し白の付いた太麺をつけて食べると丁度良く、くどさが全く無くどんどん食べられる。麺は特に味があるわけでは無いが旨味あった。",
      rating: 5,
      name: "お客様",
    },
    {
      source: "楽天",
      comment:
        "少し趣旨が違うレビューになってしまうこと失礼いたします。こちら購入し、1食目は大変おいしく頂きました。しかし2食目は大事にとっておこうと思った矢先、会社のストレスで過敏性腸症候群となり低FOD食を強いられる生活となってしまいました(;_;) ラーメン類（というより麺類）が大好物のため精神的にも辛く、やむを得ず、どうしようか悩みました。麺は家族に食べさせる事はできないので、麺は家族にあげ、スープだけは米粉麺で頂く事にしました。それでもおいしくておいしくて…違和感なくおいしいつけ麺で、1か月ぶりに美味しい麺料理が食べれて涙が出ました。このスープ、是非機会があればラーメンの販売も考えて頂けませんでしょうか。本当においしかったです。ごちそうさまでした。",
      rating: 5,
      name: "お客様",
    },
    {
      source: "楽天",
      comment:
        "気に入った点　魚介の風味がとにかく感じられてよかった。魚介系は序盤だけ風味を感じて後半はあまり感じないというものが多い中、最後までしっかり感じられる魚介の濃さに感動した。豚骨のパンチや太麺特有の食べ応えも感じられ、非常に満足度のある一杯だった。正直何食べるより美味しかった。気に入らなかった点　スープが多い。規定量より水を少なくして、より濃いめ、スープ望少なめにしたが、それでも半分近く余った。スープがかなり余る上、量も多く器にも入れにくいため、スープは半分くらいのサイズにしてほしい。ただこれを工夫であのを入れかえてさらなる余韻を生み出すので状況次第では利点にもなる。",
      rating: 5,
      name: "お客様",
    },
    {
      source: "楽天",
      comment:
        "つけ麺の中でも魚介系のドロつけ麺が好きなので購入してみました。作ってる中、粘度具合もいい感じです。太ちぢれ麺によく絡んで味もグー(^-^;;;)。やっぱりドロ系好きだな〜と感じました。別添魚粉とかあったら尚うれしいのとパッケージとか、見た感じ検討お願いします。あと購入した人で冷蔵庫入れる人は麺茹で15〜17分くらいかな。濃縮つけ汁の薄める水の量も表記通りだと濃いめなので、300ccくらい入れても大丈夫です。",
      rating: 4,
      name: "お客様",
    },
    {
      source: "楽天",
      comment:
        "魚介豚骨、極煮干、そして2回目の魚介豚骨です。これまで、さまざまなラーメンを試してきましたが、ここまでのコッテリスープは初めてです。個人的にはコッテリで人気の天○○品よりうまいと思います。1食目はつけ麺、2食目は少しだけ水を増やしてラーメンとしていただいています。スープは全く嫌な匂いが無く、コッテリのわりには油っぽさがありません。コッテリ好きには堪りません。また、リピートしたいと思います。",
      rating: 5,
      name: "お客様",
    },
  ]

  useEffect(() => {
    setCurrentReviews(reviews)
  }, [])

  const products = [
    {
      id: "gyokai-tonkotsu-2set",
      title: "豚骨と魚介の絶妙なバランス",
      subtitle: "特濃つけ麺 魚介豚骨2食セット",
      description: "麺とスープ×2食",
      note: "先ずお試しにどうぞ",
      price: "1,350円（税・送料込）",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "gyokai-tonkotsu-6set",
      title: "豚骨と魚介の絶妙なバランスをご家族で",
      subtitle: "特濃つけ麺 魚介豚骨6食セット",
      description: "麺とスープ×6食",
      note: "リピーターの皆さまへ",
      price: "3,450円（税・送料込）",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "niboshi-2set",
      title: "とにかく「煮干し」が好きな方へ",
      subtitle: "特濃つけ麺 極にぼし2食セット",
      description: "麺とスープ×2食",
      note: "先ずお試しにどうぞ",
      price: "1,350円（税・送料込）",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "niboshi-6set",
      title: "とにかく「煮干し」がご家族へ",
      subtitle: "特濃つけ麺 極にぼし6食セット",
      description: "麺とスープ×6食",
      note: "リピーターの皆さまへ",
      price: "3,450円（税・送料込）",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const relatedProducts = [
    {
      title: "魚介豚骨つけ汁×5食",
      description: "※麺は付属しておりません",
      price: "1,800円（税・送料込）",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "極にぼしつけ汁×5食",
      description: "※麺は付属しておりません",
      price: "1,800円（税・送料込）",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "極太オーション100％麺200g×4食",
      description: "※スープは付属しておりません",
      price: "1,045円",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const scrollToProducts = () => {
    const element = document.getElementById("products")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ヘッダー */}
      <header className="bg-white py-6">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <Image
            src="/placeholder.svg?height=80&width=200"
            alt="AIZU BRAND HALL"
            width={200}
            height={80}
            className="h-20 w-auto"
            priority
          />
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-grow">
        {/* メインビジュアル */}
        <section className="relative">
          <div className="relative h-[50vh] md:h-[60vh]">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="特濃つけ麺 - 濃厚スープ × 極太麺"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </section>

        {/* メインコピー */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                濃厚スープ × 極太麺、パーフェクトラーメンシリーズに特濃つけ麺が新登場！
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                ご自宅でラーメンライフを少しだけリッチに。専門店さながらの一杯を。
              </p>
              <div className="text-lg leading-relaxed text-gray-700 space-y-6 text-left">
                <p>
                  パーフェクトラーメンシリーズは、化学的に濃縮されたエキスに頼らず、実店舗と同じ素材・製法で開発。たっぷりの豚骨と背脂、旨味を凝縮した魚粉を使用し、ドロっと濃厚な特製つけ汁とオーション100％極太麺を実現しました。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 信頼画像セクション */}
        <section className="bg-pink-50 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="レビュー平均★4.8"
                  width={100}
                  height={100}
                  className="w-24 h-24"
                />
                <div>
                  <p className="text-lg font-bold">レビュー平均</p>
                  <div className="flex items-center">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      style={{ clipPath: "inset(0 20% 0 0)" }}
                    />
                    <span className="ml-2 font-bold">4.8</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="楽天市場「月間優良ショップ」受賞"
                  width={100}
                  height={100}
                  className="w-24 h-24"
                />
                <div>
                  <p className="text-lg font-bold">楽天市場</p>
                  <p className="text-sm">「月間優良ショップ」受賞</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <Button
                onClick={scrollToProducts}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold rounded-lg"
              >
                商品売場へ行く
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-bold rounded-lg bg-transparent"
                onClick={() => {
                  const element = document.getElementById("features")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                商品特徴をもっと知る（下記をご覧ください）
              </Button>
            </div>
          </div>
        </section>

        {/* 美味しさの魅力セクション */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">美味しさの魅力</h2>

            {/* エキスではない本物の素材で作る大容量の特濃つけ汁 */}
            <div className="max-w-6xl mx-auto mb-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="エキスではない本物の素材で作る大容量の特濃つけ汁"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">エキスではない本物の素材で作る大容量の特濃つけ汁</h3>
                  <div className="text-lg text-gray-700 space-y-4">
                    <p>
                      通常のご家庭用ラーメン、つけ麺スープは30cc～60ccの小袋。これは濃縮されたエキスを使用する事で製造の手間を省き流通面での小コストを図ることを目的に採用されています。しかしエキスから作られる小袋のスープはどうしてもインスタント風の味になってしましまいお店の味とは程遠いものがあります。
                    </p>
                    <p>
                      パーフェクトラーメンシリーズではラーメン店と同じ材料、同じ製法で作成したスープを大容量充填（１４５ｇ）する事でお店の味に限りなく近づける事を目標に商品を開発しています。是非この特濃で旨味あふれるつけ汁をご体験ください。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 日清製粉オーション１００％使用麺２００ｇ */}
            <div className="max-w-6xl mx-auto mb-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 md:order-2">
                  <h3 className="text-2xl font-bold text-gray-900">日清製粉オーション１００％使用麺２００ｇ</h3>
                  <div className="text-lg text-gray-700 space-y-4">
                    <p>
                      二郎やインスパイア系で実績のある日清製粉オーション１００％麺を使用しています。小麦のワイルドな香りと力強い弾力、食べ応えののある太麺が濃厚なつけ汁をしっかりと受け止め抜群の存在感を示しています。
                    </p>
                    <p>
                      麺量はたっぷり２００ｇありますので満足のいく一杯に仕上がる事間違いありません。湯で時間は７分。流水でシメてお召し上がりください。
                    </p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] w-full md:order-1">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="日清製粉オーション１００％使用麺２００ｇ"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* つけ汁たっぷり仕様。希釈後３１５ｃｃ */}
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="つけ汁たっぷり仕様。希釈後３１５ｃｃ"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">つけ汁たっぷり仕様。希釈後３１５ｃｃ</h3>
                  <div className="text-lg text-gray-700 space-y-4">
                    <p>
                      つけ汁はたっぷり用意しました。つけ麺を食べていて汁がギリギリで割りスープが利用できない。ご飯を入れられない。なんて経験はございませんか？またつけ汁が少ないと直ぐに汁が冷めてしまい、つけ麺本来のポテンシャルが引き出せません。
                    </p>
                    <p>
                      大量の豚骨を炊いて絞り出した特濃の旨味を存分に味わって頂きたく１４５ｃｃのつけ汁を１７０ｃｃの水で希釈して頂くことで合計３１５ｃｃの大容量つけ汁をご用意しました。食べ終わった後にご飯を入れておじやにするも追いスープで飲み干すのも自由自在。是非美味しい汁活をお楽しみください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 希少性セクション */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="毎日寸胴で仕込むからこそ １日限定400食まで"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">"毎日寸胴で仕込むからこそ" １日限定400食まで。</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">ストーリー</h3>
                      <div className="text-lg text-gray-700 space-y-2">
                        <p>このつけ麺は、大規模工場ラインでは作れません。</p>
                        <p>骨を炊き、魚粉を合わせ、麺に絡む特濃スープを仕込む――</p>
                        <p>すべてを職人が手仕事で行っています。</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">限定性</h3>
                      <div className="text-lg text-gray-700 space-y-2">
                        <p>
                          だからこそ、一日に仕込める数は <strong className="text-red-600 text-xl">400食まで。</strong>
                        </p>
                        <p>ご注文が重なった場合は、欠品でお待たせすることがあります。</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">約束</h3>
                      <div className="text-lg text-gray-700 space-y-2">
                        <p>妥協せず仕込み続けることでしか生まれない旨さがあります。</p>
                        <p className="font-semibold text-blue-800">"待ってでも食べたい一杯"――それが特濃つけ麺です。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 商品紹介セクション */}
        <section id="products" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">商品ラインナップ</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative aspect-square w-full bg-gray-100">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg leading-tight">{product.title}</CardTitle>
                    <CardDescription className="text-base font-semibold text-gray-800">
                      {product.subtitle}
                    </CardDescription>
                    <CardDescription className="text-sm text-gray-600">{product.description}</CardDescription>
                    <CardDescription className="text-sm font-medium text-blue-600">{product.note}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-bold text-red-600">{product.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 関連商品 */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">関連商品</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {relatedProducts.map((product, index) => (
                  <Card key={index} className="overflow-hidden shadow-lg">
                    <div className="relative aspect-square w-full bg-gray-100">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{product.title}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                      <p className="text-lg font-bold text-red-600">{product.price}</p>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* お客様の声セクション */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">お客様の声</h2>
            <p className="text-center text-gray-600 mb-12">
              これらは実際のECサイトに投稿されているものを抜粋させて頂きました。
              <br />
              ご購入の際のご参考にどうぞ
            </p>

            <div className="space-y-6 max-w-4xl mx-auto">
              {currentReviews.map((review, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4">
                      <span>{review.name}</span>
                      <span className="text-sm text-gray-500">({review.source})</span>
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, index) => (
                          <Star key={index} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="italic">&quot;{review.comment}&quot;</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 送料無料・即日配送セクション */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[3/1] w-full">
                  <Image src="/placeholder.svg?height=200&width=600" alt="送料無料" fill className="object-contain" />
                </div>
                <div className="relative aspect-[3/1] w-full">
                  <Image src="/placeholder.svg?height=200&width=600" alt="即日配送" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ご購入セクション */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">ご購入はこちらから</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Yahoo!ショッピング */}
              <div className="bg-[#ffdddd] p-6 rounded-lg">
                <Link href="#" className="block">
                  <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Yahoo!ショッピング"
                      width={200}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                  <h4 className="font-bold mb-2 text-center">Yahoo!ショッピング</h4>
                  <p className="text-sm text-center mb-4">PayPayポイントが貯まる使えるショッピングモールはこちら</p>
                  <p className="text-sm text-center text-red-600 font-bold">
                    初めて当店をご利用のお客様に300円クーポン進呈中！
                  </p>
                </Link>
              </div>

              {/* 楽天市場 */}
              <div className="bg-[#deeeff] p-6 rounded-lg">
                <Link href="#" className="block">
                  <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="楽天市場"
                      width={200}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                  <h4 className="font-bold mb-2 text-center">楽天市場</h4>
                  <p className="text-sm text-center mb-4">楽天ポイントが使える国内最大級のショッピングモールはこちら</p>
                  <p className="text-sm text-center text-red-600 font-bold">
                    初めて当店をご利用のお客様に300円クーポン進呈中！
                  </p>
                </Link>
              </div>

              {/* Amazon */}
              <div className="bg-[#e8ffdd] p-6 rounded-lg">
                <Link href="#" className="block">
                  <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Amazon"
                      width={200}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                  <h4 className="font-bold mb-2 text-center">Amazon</h4>
                  <p className="text-sm text-center mb-4">世界最大のショッピングモールでのお買い物はこちら</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 店舗情報セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-2 md:px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-8 px-4">
            この商品は「会津ブランド館」が製造・販売・発送を行っています。
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="会津ブランド館 店舗外観"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-2">店舗案内</h3>
              <div className="space-y-2">
                <p className="font-bold">会津ブランド館</p>
                <p>〒965-0044</p>
                <p>福島県会津若松市七日町6−15</p>
                <p>TEL: 0242-25-4141</p>
                <p>営業時間: 11時〜16時</p>
                <p>定休日: 12月31日・1月1日</p>
                <p className="text-sm text-gray-600">（発送もお休みさせて頂きます）</p>
              </div>
            </div>
          </div>

          {/* SNSリンク */}
          <div className="flex justify-center space-x-6 mt-8">
            <Link
              href="https://www.facebook.com/aizubrandkan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <Facebook size={32} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://x.com/Aizu_Brand_Kan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
              <span className="sr-only">X (formerly Twitter)</span>
            </Link>
            <Link
              href="https://www.instagram.com/aizubrandhall/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600"
            >
              <Instagram size={32} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCpusPn2NlWyrgkIMbacH4-w"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600"
            >
              <Youtube size={32} />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 AIZU BRAND HALL. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
