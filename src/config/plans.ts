import { Crown, Rocket, Sparkles } from "lucide-react";

export const STRIPE_PLANS = {
  STARTER:"price_1RuUxlKFMJ0NBIx7PaziUmFi",
  PRO:"price_1RuUyFKFMJ0NBIx7dWQ9c842",
  ENTERPRISE:"price_1RuUyfKFMJ0NBIx7HP9V9ZZ5",
}

export const plans = [
  {
    name: "Starter",
    icon: Sparkles,
    price: "￥1,000",
    description: "個人利用に最適なエントリープラン",
    features: ["月50クレジット付与", "基本的な画像生成","メールサポート"],
    buttonText: "Starterプランを選択",
    priceId: STRIPE_PLANS.STARTER,
  },
  {
    name: "Pro",
    icon: Rocket,
    price: "￥2,000",
    description: "プロフェッショナルな制作活動に",
    features: ["月120クレジット付与", "優先サポート","商用利用可能","メールサポート"],
    popular: true,
    buttonText: "Proプランを選択",
    priceId: STRIPE_PLANS.PRO,
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "￥5,000",
    description: "ビジネス向けな完全なソリューション",
    features: ["月300クレジット付与", "24時間優先サポート","メールサポート","API利用可能","カスタマイズ可能"],
    buttonText: "Enterpriseプランを選択",
    priceId: STRIPE_PLANS.ENTERPRISE,
  },
];