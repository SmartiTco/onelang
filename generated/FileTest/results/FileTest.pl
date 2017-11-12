use strict;
use warnings;

package TestClass;

sub new
{
    my $class = shift;
    my $self = {};
    bless $self, $class;
    
    return $self;
}

sub testMethod {
    my ( $self ) = @_;
    open my $fh, '<', "../../input/test.txt" or die "Can't open file $!";
    read $fh, my $file_content, -s $fh;
    close($fh);
    return $file_content;
}

package Program;
my $c = new TestClass();
$c->testMethod();