import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import { useNavigate } from "react-router-dom";

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductModal = ({ product, open, onOpenChange }: ProductModalProps) => {
  const navigate = useNavigate();

  if (!product) return null;

  const handleGetQuote = () => {
    onOpenChange(false);
    navigate("/contact");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/*
        Desktop: 70% width & height (approx), using max-w/height utilities.
        Mobile: 90% width & height.
        Layout: on md+ use two-column grid with image left and content right (centered vertically).
        Mobile: stack, description scrollable and button sticky to bottom.
      */}
      <DialogContent className="w-[90vw] h-[90vh] md:min-w-[70%] md:w-[70vw] md:max-w-[70vw] md:h-[70vh] p-0 bg-transparent">
        <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] h-full overflow-hidden">
          {/* Use stacked layout on mobile and two-column layout on md+ */}
          <div className="h-full flex flex-col md:grid md:grid-cols-2">
            {/* Left: Image - on mobile this becomes the top area with fixed height; on desktop it fills left half */}
            <div className="w-full h-56 md:h-auto bg-secondary/50 overflow-hidden">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
            </div>

            {/* Right: content area */}
            <div className="flex flex-col">
              <div className="p-6 md:p-8 flex-1 overflow-auto">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-2xl font-semibold">{product.title}</h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {product.category}
                  </Badge>
                </div>

                <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{product.fullDescription}</p>
                {/* Instruction: show product id and ask user to mention it */}
                <div className="mt-4">
                  <p className="text-sm mt-1 font-medium" title="Please mention this product id while reaching us.">
                    Product Id: <span className="font-bold">{product.id}</span>
                  </p>
                </div>
              </div>

              {/* Button area - sticks to bottom visually on mobile; on desktop it appears below the description as before */}
              <div className="p-4 md:p-6 border-t border-border bg-card">
                <div className="max-w-full flex justify-end">
                  <Button onClick={handleGetQuote} size="lg" className="w-full md:w-auto">
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
