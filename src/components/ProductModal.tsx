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
      <DialogContent className="w-[90vw] h-[90vh] md:w-[70vw] md:h-[70vh] p-0 bg-transparent">
        <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] h-full overflow-hidden flex flex-col">
          {/* Image section - keep image on top for desktop like before */}
          <div className="w-full h-56 md:h-72 bg-secondary/50 overflow-hidden">
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
          </div>

          {/* Content section */}
          <div className="flex-1 flex flex-col">
            <div className="p-6 md:p-8 flex-1 overflow-auto">
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="text-2xl font-semibold">{product.title}</h3>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {product.category}
                </Badge>
              </div>

              <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{product.fullDescription}</p>
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
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
