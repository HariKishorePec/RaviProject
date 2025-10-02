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
      <DialogContent className="max-w-[60vw] max-h-[60vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            {product.title}
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              {product.category}
            </Badge>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="aspect-video w-full bg-secondary/50 rounded-xl overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {product.fullDescription}
            </p>
            
            <Button 
              onClick={handleGetQuote}
              size="lg" 
              className="w-full sm:w-auto"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
